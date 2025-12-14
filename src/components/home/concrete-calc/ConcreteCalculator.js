import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Square, SquareDashed } from 'lucide-react';
const ConcreteCalculator = () => {
  const [slabDimensions, setSlabDimensions] = useState({
    length: '',
    width: '',
    height: ''
  });
  const [wallDimensions, setWallDimensions] = useState({
    length: '',
    width: '',
    // Add width for wall calculation
    height: '',
    thickness: ''
  });
  const calculateSlabVolume = () => {
    const length = parseFloat(slabDimensions.length);
    const width = parseFloat(slabDimensions.width);
    const height = parseFloat(slabDimensions.height) / 100; // Convert cm to meters

    if (isNaN(length) || isNaN(width) || isNaN(height)) return 0;
    return (length * width * height).toFixed(2);
  };
  const calculateWallVolume = () => {
    const length = parseFloat(wallDimensions.length);
    const width = parseFloat(wallDimensions.width); // Parse width
    const height = parseFloat(wallDimensions.height);
    const thickness = parseFloat(wallDimensions.thickness) / 100; // Convert cm to meters

    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(thickness)) return 0;
    return (length * width * height * thickness).toFixed(2); // Multiply by width and height
  };
  return <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Square className="h-5 w-5 text-guide-primary" />
          <h3 className="text-lg font-semibold">חישוב נפח רצפה/תקרה</h3>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="slab-length">אורך (מטר)</Label>
            <Input id="slab-length" type="number" value={slabDimensions.length} onChange={e => setSlabDimensions({
            ...slabDimensions,
            length: e.target.value
          })} placeholder="הכנס אורך במטרים" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="slab-width">רוחב (מטר)</Label>
            <Input id="slab-width" type="number" value={slabDimensions.width} onChange={e => setSlabDimensions({
            ...slabDimensions,
            width: e.target.value
          })} placeholder="הכנס רוחב במטרים" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="slab-height">עובי (ס"מ)</Label>
            <Input id="slab-height" type="number" value={slabDimensions.height} onChange={e => setSlabDimensions({
            ...slabDimensions,
            height: e.target.value
          })} placeholder='הכנס עובי בס"מ' />
          </div>
          <div className="p-4 bg-muted rounded-md">
            <p className="text-lg font-medium">נפח בטון נדרש: {calculateSlabVolume()} מ"ק</p>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <SquareDashed className="h-5 w-5 text-guide-primary" />
          <h3 className="text-lg font-semibold">חישוב נפח קיר</h3>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="wall-length">אורך (מטר)</Label>
            <Input id="wall-length" type="number" value={wallDimensions.length} onChange={e => setWallDimensions({
            ...wallDimensions,
            length: e.target.value
          })} placeholder="הכנס אורך במטרים" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="wall-width">רוחב (מטר)</Label>
            <Input id="wall-width" type="number" value={wallDimensions.width} onChange={e => setWallDimensions({
            ...wallDimensions,
            width: e.target.value
          })} placeholder="הכנס רוחב במטרים" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="wall-height">גובה (מטר)</Label>
            <Input id="wall-height" type="number" value={wallDimensions.height} onChange={e => setWallDimensions({
            ...wallDimensions,
            height: e.target.value
          })} placeholder="הכנס גובה במטרים" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="wall-thickness">עובי (ס"מ)</Label>
            <Input id="wall-thickness" type="number" value={wallDimensions.thickness} onChange={e => setWallDimensions({
            ...wallDimensions,
            thickness: e.target.value
          })} placeholder='הכנס עובי בס"מ' />
          </div>
          <div className="p-4 bg-muted rounded-md">
            <p className="text-lg font-medium">נפח בטון נדרש: {calculateWallVolume()} מ"ק</p>
          </div>
        </div>
      </Card>
    </div>;
};
export default ConcreteCalculator;