import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const rebarInfo = [{
  diameter: 6,
  weight: 0.222
}, {
  diameter: 8,
  weight: 0.395
}, {
  diameter: 10,
  weight: 0.617
}, {
  diameter: 12,
  weight: 0.888
}, {
  diameter: 14,
  weight: 1.21
}, {
  diameter: 16,
  weight: 1.58
}, {
  diameter: 18,
  weight: 2.00
}, {
  diameter: 20,
  weight: 2.47
}, {
  diameter: 22,
  weight: 2.98
}, {
  diameter: 24,
  weight: 3.55
}, {
  diameter: 25,
  weight: 3.85
}];
const RebarList = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();
  const displayedRows = showAll ? rebarInfo : rebarInfo.slice(0, 3);
  return <div>
      {isMobile ?
    // Mobile optimized view
    <div className="space-y-3">
          {displayedRows.map(({
        diameter,
        weight
      }) => <div key={diameter} className="bg-card rounded-md shadow p-3 border">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-right font-medium">קוטר (מ"מ)</div>
                <div>{diameter}</div>
                <div className="text-right font-medium">משקל (ק"ג/מטר)</div>
                <div>{weight}</div>
                <div className="text-right font-medium">משקל למוט 6 מטר</div>
                <div>{(weight * 6).toFixed(2)} ק"ג</div>
                <div className="text-right font-medium">משקל למוט 12 מטר</div>
                <div>{(weight * 12).toFixed(2)} ק"ג</div>
              </div>
            </div>)}
        </div> :
    // Desktop view with table
    <ScrollArea className="rounded-md border">
          <Table dir="rtl">
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">קוטר (מ"מ)</TableHead>
                <TableHead className="text-right">משקל (ק"ג/מטר)</TableHead>
                <TableHead className="text-right">משקל למוט 6 מטר (ק"ג)</TableHead>
                <TableHead className="text-right">משקל למוט 12 מטר (ק"ג)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedRows.map(({
            diameter,
            weight
          }) => <TableRow key={diameter}>
                  <TableCell>{diameter}</TableCell>
                  <TableCell>{weight}</TableCell>
                  <TableCell>{(weight * 6).toFixed(2)}</TableCell>
                  <TableCell>{(weight * 12).toFixed(2)}</TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </ScrollArea>}
      
      {!showAll && <div className="flex justify-center mt-2">
          <Button variant="ghost" className="flex items-center gap-1" onClick={() => setShowAll(true)}>
            <ChevronDown className="h-4 w-4" />
            הצג עוד
          </Button>
        </div>}
    </div>;
};
export default RebarList;