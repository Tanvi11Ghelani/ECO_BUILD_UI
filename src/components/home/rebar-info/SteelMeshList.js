import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const steelMeshInfo = [{
  diameter: 5.0,
  weightPerMeter: 0.154,
  spacings: {
    5: 3.08,
    7.5: 2.05,
    10: 1.54,
    12.5: 1.23,
    15: 1.03,
    17.5: 0.88,
    20: 0.77,
    22.5: 0.69,
    25: 0.62,
    27.5: 0.56,
    30: 0.52
  }
}, {
  diameter: 5.5,
  weightPerMeter: 0.187,
  spacings: {
    5: 3.74,
    7.5: 2.49,
    10: 1.87,
    12.5: 1.50,
    15: 1.25,
    17.5: 1.07,
    20: 0.94,
    22.5: 0.83,
    25: 0.75,
    27.5: 0.68,
    30: 0.63
  }
}, {
  diameter: 6.0,
  weightPerMeter: 0.222,
  spacings: {
    5: 4.44,
    7.5: 2.96,
    10: 2.22,
    12.5: 1.78,
    15: 1.48,
    17.5: 1.27,
    20: 1.11,
    22.5: 0.99,
    25: 0.89,
    27.5: 0.81,
    30: 0.74
  }
}, {
  diameter: 6.5,
  weightPerMeter: 0.260,
  spacings: {
    5: 5.20,
    7.5: 3.47,
    10: 2.60,
    12.5: 2.08,
    15: 1.73,
    17.5: 1.49,
    20: 1.30,
    22.5: 1.16,
    25: 1.04,
    27.5: 0.95,
    30: 0.87
  }
}, {
  diameter: 7.0,
  weightPerMeter: 0.302,
  spacings: {
    5: 6.04,
    7.5: 4.03,
    10: 3.02,
    12.5: 2.42,
    15: 2.01,
    17.5: 1.73,
    20: 1.51,
    22.5: 1.34,
    25: 1.21,
    27.5: 1.10,
    30: 1.01
  }
}, {
  diameter: 7.5,
  weightPerMeter: 0.347,
  spacings: {
    5: 6.94,
    7.5: 4.63,
    10: 3.47,
    12.5: 2.78,
    15: 2.31,
    17.5: 1.98,
    20: 1.73,
    22.5: 1.54,
    25: 1.39,
    27.5: 1.26,
    30: 1.16
  }
}, {
  diameter: 8.0,
  weightPerMeter: 0.395,
  spacings: {
    5: 7.90,
    7.5: 5.27,
    10: 3.95,
    12.5: 3.16,
    15: 2.63,
    17.5: 2.26,
    20: 1.97,
    22.5: 1.76,
    25: 1.58,
    27.5: 1.44,
    30: 1.32
  }
}, {
  diameter: 8.5,
  weightPerMeter: 0.446,
  spacings: {
    5: 8.92,
    7.5: 5.95,
    10: 4.46,
    12.5: 3.57,
    15: 2.97,
    17.5: 2.55,
    20: 2.23,
    22.5: 1.98,
    25: 1.78,
    27.5: 1.62,
    30: 1.49
  }
}, {
  diameter: 9.0,
  weightPerMeter: 0.500,
  spacings: {
    5: 10.0,
    7.5: 6.67,
    10: 5.00,
    12.5: 4.00,
    15: 3.33,
    17.5: 2.86,
    20: 2.50,
    22.5: 2.22,
    25: 2.0,
    27.5: 1.82,
    30: 1.67
  }
}, {
  diameter: 9.5,
  weightPerMeter: 0.556,
  spacings: {
    5: 11.1,
    7.5: 7.41,
    10: 5.56,
    12.5: 4.45,
    15: 3.71,
    17.5: 3.18,
    20: 2.78,
    22.5: 2.47,
    25: 2.22,
    27.5: 2.02,
    30: 1.85
  }
}, {
  diameter: 10.0,
  weightPerMeter: 0.617,
  spacings: {
    5: 12.3,
    7.5: 8.23,
    10: 6.17,
    12.5: 4.94,
    15: 4.11,
    17.5: 3.52,
    20: 3.09,
    22.5: 2.74,
    25: 2.47,
    27.5: 2.24,
    30: 2.06
  }
}, {
  diameter: 10.5,
  weightPerMeter: 0.680,
  spacings: {
    5: 13.6,
    7.5: 9.07,
    10: 6.80,
    12.5: 5.44,
    15: 4.53,
    17.5: 3.89,
    20: 3.40,
    22.5: 3.02,
    25: 2.72,
    27.5: 2.47,
    30: 2.27
  }
}, {
  diameter: 11.0,
  weightPerMeter: 0.746,
  spacings: {
    5: 14.9,
    7.5: 9.95,
    10: 7.46,
    12.5: 5.97,
    15: 4.97,
    17.5: 4.26,
    20: 3.73,
    22.5: 3.32,
    25: 2.98,
    27.5: 2.71,
    30: 2.49
  }
}, {
  diameter: 11.5,
  weightPerMeter: 0.816,
  spacings: {
    5: 16.3,
    7.5: 10.9,
    10: 8.16,
    12.5: 6.53,
    15: 5.44,
    17.5: 4.66,
    20: 4.08,
    22.5: 3.63,
    25: 3.26,
    27.5: 2.97,
    30: 2.72
  }
}, {
  diameter: 12.0,
  weightPerMeter: 0.888,
  spacings: {
    5: 17.8,
    7.5: 11.8,
    10: 8.88,
    12.5: 7.10,
    15: 5.92,
    17.5: 5.07,
    20: 4.44,
    22.5: 3.95,
    25: 3.55,
    27.5: 3.23,
    30: 2.96
  }
}];
const SteelMeshList = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();
  const displayedRows = showAll ? steelMeshInfo : steelMeshInfo.slice(0, 5);

  // Select only a subset of spacing values for mobile
  const mobileSpacingKeys = isMobile ? [5, 10, 15, 20, 30] : Object.keys(steelMeshInfo[0].spacings);
  return <div>
      <div className="bg-muted/50 p-4 rounded-md mb-4 text-sm">
        <p>הערה: המשקלים בטבלה הם משקלים למ"ר עבור רשת חד כיוונית. לרשת שתי-וערב יש להכפיל פי 2.</p>
        <p>סיבולת המשקל היא עד 6% יותר מהמשקל הנומינלי.</p>
      </div>

      {isMobile ?
    // Mobile optimized view
    <div className="space-y-4">
          {displayedRows.map(({
        diameter,
        weightPerMeter,
        spacings
      }) => <div key={diameter} className="bg-card rounded-md shadow p-3 border">
              <div className="grid grid-cols-2 gap-2 mb-2 font-medium">
                <div className="text-right">קוטר (מ"מ)</div>
                <div>{diameter}</div>
                <div className="text-right">משקל למ' אורך (ק"ג)</div>
                <div>{weightPerMeter}</div>
              </div>
              
              <div className="text-right font-medium mb-1">מרווחים (ס"מ) - משקל למ"ר (ק"ג)</div>
              <div className="grid grid-cols-3 gap-1 text-sm">
                {mobileSpacingKeys.map(spacing => <div key={spacing} className="bg-muted/50 p-1 rounded text-center">
                    <div className="font-medium">{spacing}</div>
                    <div>{spacings[spacing]}</div>
                  </div>)}
              </div>
            </div>)}
        </div> :
    // Desktop view with horizontal scrolling table
    <ScrollArea className="rounded-md border">
          <div className="min-w-[900px]">
            <Table dir="rtl">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right border-l">קוטר (מ"מ)</TableHead>
                  <TableHead className="text-right border-l">משקל למ' אורך (ק"ג)</TableHead>
                  <TableHead className="text-center" colSpan={11}>מרווחים בין המוטות - משקל למ"ר (ק"ג)</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-right border-l"></TableHead>
                  <TableHead className="text-right border-l"></TableHead>
                  {Object.keys(steelMeshInfo[0].spacings).map(spacing => <TableHead key={spacing} className="text-right px-2 border-l">{spacing}</TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {displayedRows.map(({
              diameter,
              weightPerMeter,
              spacings
            }) => <TableRow key={diameter}>
                    <TableCell className="border-l">{diameter}</TableCell>
                    <TableCell className="border-l">{weightPerMeter}</TableCell>
                    {Object.values(spacings).map((weight, index) => <TableCell key={index} className="text-right px-2 border-l">{weight}</TableCell>)}
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>}

      {!showAll && steelMeshInfo.length > 5 && <div className="flex justify-center mt-2">
          <Button variant="ghost" className="flex items-center gap-1" onClick={() => setShowAll(true)}>
            <ChevronDown className="h-4 w-4" />
            הצג עוד
          </Button>
        </div>}
    </div>;
};
export default SteelMeshList;