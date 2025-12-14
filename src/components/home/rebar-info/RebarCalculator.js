import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
const rebarDiameters = [{
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
const wallThicknesses = [{
  value: "0.15",
  label: "15 ס״מ"
}, {
  value: "0.20",
  label: "20 ס״מ"
}, {
  value: "0.25",
  label: "25 ס״מ"
}, {
  value: "0.30",
  label: "30 ס״מ"
}];
const RebarCalculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [thickness, setThickness] = useState('0.15');
  const [height, setHeight] = useState('');
  const [selectedDiameter, setSelectedDiameter] = useState('');
  const [includeTolerance, setIncludeTolerance] = useState(true);
  const calculateRebar = () => {
    if (!length || !width || !height || !thickness || !selectedDiameter) return null;
    const numLength = parseFloat(length);
    const numWidth = parseFloat(width);
    const numHeight = parseFloat(height);
    if (isNaN(numLength) || isNaN(numWidth) || isNaN(numHeight)) return null;

    // Calculate total wall area in square meters (2 long walls + 2 short walls)
    const wallArea = numLength * numHeight * 2 + numWidth * numHeight * 2;

    // Calculate base weight (10kg per square meter)
    let estimatedWeight = wallArea * 10;

    // Apply 6% tolerance if selected
    if (includeTolerance) {
      estimatedWeight *= 1.06;
    }

    // Get the weight per meter for selected rebar diameter
    const selectedRebarWeight = rebarDiameters.find(rebar => rebar.diameter === parseInt(selectedDiameter))?.weight || 0;
    return {
      totalLength: (wallArea * 16).toFixed(2),
      // Assuming 16m of rebar per m² of wall
      wallArea: wallArea.toFixed(2),
      estimatedWeight: estimatedWeight.toFixed(2),
      weightPerMeter: selectedRebarWeight
    };
  };
  const result = calculateRebar();
  return <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl text-right">מחשבון ברזל זיון לקירות</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="length" className="text-right">אורך קיר (מטר)</Label>
            <Input id="length" type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="הכנס אורך" dir="rtl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="width" className="text-right">רוחב מבנה (מטר)</Label>
            <Input id="width" type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="הכנס רוחב" dir="rtl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="thickness" className="text-right">עובי קיר</Label>
            <Select value={thickness} onValueChange={setThickness} defaultValue="0.15">
              <SelectTrigger id="thickness" className="text-right">
                <SelectValue placeholder="בחר עובי קיר" />
              </SelectTrigger>
              <SelectContent>
                {wallThicknesses.map(thickness => <SelectItem key={thickness.value} value={thickness.value} className="text-right">
                    {thickness.label}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="height" className="text-right">גובה קיר (מטר)</Label>
            <Input id="height" type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="הכנס גובה" dir="rtl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="diameter" className="text-right">קוטר ברזל (מ"מ)</Label>
            <Select value={selectedDiameter} onValueChange={setSelectedDiameter}>
              <SelectTrigger id="diameter" className="text-right">
                <SelectValue placeholder="בחר קוטר" />
              </SelectTrigger>
              <SelectContent>
                {rebarDiameters.map(rebar => <SelectItem key={rebar.diameter} value={rebar.diameter.toString()} className="text-right">
                    {rebar.diameter} מ"מ
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="block text-right">תוספת סיבולת משקל</Label>
          <RadioGroup value={includeTolerance ? "yes" : "no"} onValueChange={value => setIncludeTolerance(value === "yes")} className="flex flex-col space-y-1">
            <div className="flex items-center justify-end space-x-2 space-x-reverse">
              <Label htmlFor="yes" className="text-right">כולל תוספת 6%</Label>
              <RadioGroupItem value="yes" id="yes" />
            </div>
            <div className="flex items-center justify-end space-x-2 space-x-reverse">
              <Label htmlFor="no" className="text-right">ללא תוספת</Label>
              <RadioGroupItem value="no" id="no" />
            </div>
          </RadioGroup>
        </div>
        
        {result && <div className="mt-6 p-4 bg-muted rounded-lg space-y-2 text-right">
            <div className="text-lg font-bold">
              <span>שטח קירות כולל: </span>
              <span className="text-guide-primary">{result.wallArea} מ"ר</span>
            </div>
            <div className="text-lg">
              <span className="font-semibold">משקל ברזל מוערך{includeTolerance ? ' (כולל תוספת 6%)' : ''}: </span>
              <span className="font-bold text-guide-primary">{result.estimatedWeight} ק"ג</span>
            </div>
            <div className="text-lg">
              <span className="font-semibold">סה"כ אורך ברזל נדרש: </span>
              {result.totalLength} מטר
            </div>
            <Alert variant="destructive" className="mt-4">
              <Info className="h-5 w-5" />
              <AlertDescription className="text-destructive font-medium text-right">
                שים לב: החישוב אינו כולל ברזל לחיזוקים בפינות, מעל חלונות ופתחים במיוחד פתחים רחבים.
                יש לציית להנחיות הקונסטרוקטור בכל הקשור לכמויות וסוגי הברזל.
              </AlertDescription>
            </Alert>
          </div>}
      </CardContent>
    </Card>;
};
export default RebarCalculator;