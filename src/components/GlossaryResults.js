import React from 'react';

const GlossaryResults = ({ items, onReset }) => {
  return <div className="space-y-4">
    <div className="flex justify-end">
      <button className="border rounded-md px-3 py-2" onClick={onReset}>איפוס</button>
    </div>
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="border rounded-md p-3 flex justify-between">
          <span>{item.hebrew}</span>
          <span className="text-muted-foreground">{item.american}</span>
        </li>
      ))}
      {items.length === 0 && <li className="text-muted-foreground">לא נמצאו תוצאות</li>}
    </ul>
  </div>;
};

export default GlossaryResults;
