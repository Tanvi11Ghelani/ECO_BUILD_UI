import React from 'react';

const GlossarySearch = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange, categories }) => {
  return <div className="flex gap-3 mb-6">
    <input
      className="border rounded-md px-3 py-2 flex-1"
      placeholder="חפש מונח..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <select
      className="border rounded-md px-3 py-2"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {categories.map((c) => (
        <option key={c.value} value={c.value}>{c.label}</option>
      ))}
    </select>
  </div>;
};

export default GlossarySearch;
