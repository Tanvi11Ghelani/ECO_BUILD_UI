#!/usr/bin/env node
/**
 * react-i18n-autogen
 * Fully automated tool that:
 * 1. Scans React components for hard-coded text
 * 2. Generates en.json translation file
 * 3. Rewrites components to use t('key')
 */

const fs = require('fs');
const path = require('path');
const recast = require('recast');
const { visit } = require('ast-types');

// CONFIG
const SRC_DIR = path.join(process.cwd(), 'src');
const OUT_FILE = path.join(process.cwd(), 'en.json');
let translations = {};

// Util: extract unique key from text
function makeKey(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

// Rewrite a single file into i18n
function transformFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const ast = recast.parse(source, { parser: require('recast/parsers/babel') });

  visit(ast, {
 visitJSXText(pathNode) {
  const raw = pathNode.node.value;

  if (!raw || !raw.trim()) return false;

  const text = raw.trim();
  if (text.length < 2) return false;

  const key = makeKey(text);
  translations[key] = text;

  // Create proper JSX expression container
  const expression = recast.parse(`t('${key}')`).program.body[0].expression;
  pathNode.replace({
    type: 'JSXExpressionContainer',
    expression
  });

  return false;
},

    // Handle attributes: placeholder="Login" → placeholder={t('login')}
    visitJSXAttribute(pathNode) {
      const name = pathNode.node.name && pathNode.node.name.name;

      // Only translate attributes that contain human-facing text
      const TRANSLATE_ATTRS = [
        'placeholder',
        'title',
        'alt',
        'label',
        'aria-label'
      ];

      if (!TRANSLATE_ATTRS.includes(name)) return false;

      if (!pathNode.node.value || pathNode.node.value.type !== 'StringLiteral') return false;

      const text = pathNode.node.value.value.trim();
      if (!text) return false;

      const key = makeKey(text);
      translations[key] = text;

      pathNode.node.value = {
        type: 'JSXExpressionContainer',
        expression: recast.parse(`t('${key}')`).program.body[0].expression
      };

      return false;
    }
  });

  const output = recast.print(ast).code;
  fs.writeFileSync(filePath, output, 'utf8');
}

// Recursively find .js / .jsx files
function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) return walk(full);
    if (full.endsWith('.js') || full.endsWith('.jsx')) transformFile(full);
  });
}

console.log('🔍 Scanning React components...');
walk(SRC_DIR);

console.log('💾 Writing en.json');
fs.writeFileSync(OUT_FILE, JSON.stringify(translations, null, 2));

console.log('✅ Done! Hardcoded text replaced with t() and en.json generated.');
