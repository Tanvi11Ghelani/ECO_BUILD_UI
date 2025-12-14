import React from 'react';
import { MESH_LENGTH, MESH_WIDTH, MESH_AREA } from './constants';
import { useIsMobile } from '@/hooks/use-mobile';
const MeshCalculatorResults = ({
  result,
  includeTolerance
}) => {
  const isMobile = useIsMobile();
  return <div className="mb-6 p-4 bg-muted rounded-md space-y-2 text-right">
      <div className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'}`}>
        משקל רשת: {result.totalWeight.toFixed(2)} ק"ג
      </div>
      <div className="text-sm text-muted-foreground">
        שטח רשת: {MESH_AREA} מ"ר ({MESH_LENGTH}×{MESH_WIDTH} מטר)
      </div>
      <div className="text-sm text-muted-foreground">
        מספר מוטות: {result.barsLengthCount} לאורך, {result.barsWidthCount} לרוחב
      </div>
      {includeTolerance && <div className="text-sm text-muted-foreground">
          (כולל תוספת 6% סיבולת משקל)
        </div>}
    </div>;
};
export default MeshCalculatorResults;