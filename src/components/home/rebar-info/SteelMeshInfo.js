import React from 'react';
import SteelMeshList from './SteelMeshList';
import SteelMeshCalculator from './SteelMeshCalculator';
const SteelMeshInfo = () => {
  return <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-right">רשתות זיון</h3>
        <SteelMeshList />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 text-right">מחשבון רשתות זיון</h3>
        <SteelMeshCalculator />
      </div>
    </div>;
};
export default SteelMeshInfo;