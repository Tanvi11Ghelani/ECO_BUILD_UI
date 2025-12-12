const fs = require('fs');
const path = require('path');

const rootDir = 'public/EcoBuildPdf/Flammableconstruction';
const absRootDir = path.resolve(rootDir);

const structure = {
      "floor-at-grade": {},
      "intermediate-floor": {},
      "roof": {},
      "door": {},
      "window": {}
};

const mapDirToTab = (dirName) => {
      if (dirName === 'FlooratGradeDetails') return 'floor-at-grade';
      if (dirName === 'IntermediateFloor') return 'intermediate-floor';
      if (dirName === 'Roof') return 'roof';
      if (dirName === 'Door') return 'door';
      if (dirName === 'Window') return 'window';
      return null;
};

function walk(dir) {
      const results = [];
      const list = fs.readdirSync(dir);
      list.forEach(function (file) {
            file = path.resolve(dir, file);
            const stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                  results.push(...walk(file));
            } else {
                  results.push(file);
            }
      });
      return results;
}

const allFiles = walk(absRootDir);
const pdfFiles = allFiles.filter(f => f.toLowerCase().endsWith('.pdf'));

const data = {};

pdfFiles.forEach(pdfPath => {
      const relPath = path.relative(absRootDir, pdfPath);
      const parts = relPath.split(path.sep);
      // parts[0] is the main category (e.g., Door)

      const tab = mapDirToTab(parts[0]);
      if (!tab) return;

      if (!data[tab]) data[tab] = { sections: [] };

      // Determine section title
      // If deeper structure, use subfolders as title
      let sectionTitle = parts.slice(1, parts.length - 1).join(' - ');
      if (!sectionTitle) sectionTitle = "General";

      let section = data[tab].sections.find(s => s.title === sectionTitle);
      if (!section) {
            section = { title: sectionTitle, items: [] };
            data[tab].sections.push(section);
      }

      const fileName = path.basename(pdfPath);
      const nameWithoutExt = path.basename(pdfPath, '.pdf');

      // Parse info from filename
      // Pattern seems to be: [Description] [Size] (mm) Concrete core [Code].pdf
      // Example: Head and Sill Brick 6_ (152mm) Concrete core E6E01.pdf

      let coreThickness = "";
      let description = nameWithoutExt;
      let code = "";

      // Try to extract thickness
      const thicknessMatch = nameWithoutExt.match(/(\d+)[_']?\s*\((\d+)mm\)/);
      if (thicknessMatch) {
            coreThickness = thicknessMatch[1];
      }

      // Try to extract code (usually at the end)
      const codeMatch = nameWithoutExt.match(/([A-Z0-9]+)$/);
      if (codeMatch) {
            code = codeMatch[1];
      }

      // DWG path guess
      const dwgName = nameWithoutExt + ".dwg"; // Or maybe based on code?
      // In previous find output: `e6e01.dwg` (lowercase code) matches `E6E01.pdf` (uppercase code inside filename)
      // Let's search for a dwg that matches the code
      const dwgFile = allFiles.find(f => f.toLowerCase().endsWith('.dwg') && f.toLowerCase().includes(path.basename(pdfPath, '.pdf').toLowerCase()));

      // Alternative dwg search: Look for just the code if possible? "e6e01.dwg"
      let dwgUrl = "";
      const specificDwg = allFiles.find(f => f.toLowerCase().endsWith('.dwg') && f.toLowerCase().includes(code.toLowerCase() + ".dwg"));

      if (dwgFile) {
            dwgUrl = "/EcoBuildPdf/Flammableconstruction/" + path.relative(absRootDir, dwgFile).replace(/\\/g, '/');
      } else if (specificDwg) {
            dwgUrl = "/EcoBuildPdf/Flammableconstruction/" + path.relative(absRootDir, specificDwg).replace(/\\/g, '/');
      }

      const pdfUrl = "/EcoBuildPdf/Flammableconstruction/" + relPath.replace(/\\/g, '/');

      section.items.push({
            description: description,
            coreThickness: coreThickness,
            claddingType: description.toLowerCase().includes('brick') && !description.toLowerCase().includes('non-brick') ? "with_bricks" : "without_bricks", // simplistic guess
            insulation: description.toLowerCase().includes('insulated') ? "isolated" : "not_isolated", // simplistic guess
            fileName: code || nameWithoutExt,
            pdfUrl: pdfUrl,
            dwgUrl: dwgUrl
      });
});

console.log(JSON.stringify(data, null, 2));
