import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import { diameterWeights, spacings, MESH_LENGTH, MESH_WIDTH } from './constants';
import MeshCalculatorResults from './MeshCalculatorResults';
import MeshFormulaExplanation from './MeshFormulaExplanation';
import { useIsMobile } from '@/hooks/use-mobile';
const SteelMeshCalculator = () => {
  const [diameter, setDiameter] = useState("10.0");
  const [spacing, setSpacing] = useState("15");
  const [meshType, setMeshType] = useState("double");
  const [includeTolerance, setIncludeTolerance] = useState(true);
  const [result, setResult] = useState(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    calculateMeshWeight();
  }, [diameter, spacing, meshType, includeTolerance]);
  const calculateMeshWeight = () => {
    const selectedDiameter = parseFloat(diameter);
    const spacingInCm = parseFloat(spacing);
    const weightPerMeter = diameterWeights.find(d => d.diameter === selectedDiameter)?.weight || 0;
    const barsLengthCount = Math.floor(MESH_LENGTH * 100 / spacingInCm) + 1;
    const barsWidthCount = Math.floor(MESH_WIDTH * 100 / spacingInCm) + 1;
    let totalLength = barsLengthCount * MESH_WIDTH + barsWidthCount * MESH_LENGTH;
    if (meshType === "double") {
      totalLength *= 2;
    }
    let totalWeight = totalLength * weightPerMeter;
    if (includeTolerance) {
      totalWeight *= 1.06;
    }
    setResult({
      totalLength,
      barsLengthCount,
      barsWidthCount,
      totalWeight
    });
  };
  return <Card>
      <CardContent className="pt-6">
        <div className="flex items-center mb-4 justify-end">
          <h3 className="text-lg font-semibold ml-2">מחשבון רשתות זיון</h3>
          <Calculator className="h-5 w-5 text-guide-primary" />
        </div>
        
        {result && <MeshCalculatorResults result={result} includeTolerance={includeTolerance} />}
        
        <div className="space-y-4" dir="rtl">
          <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-4`}>
            <div className="space-y-2">
              <Label htmlFor="diameter" className="block text-right">קוטר ברזל (מ"מ)</Label>
              <Select value={diameter} onValueChange={setDiameter}>
                <SelectTrigger id="diameter" className="text-right">
                  <SelectValue placeholder="בחר קוטר" />
                </SelectTrigger>
                <SelectContent>
                  {diameterWeights.map(item => <SelectItem key={item.diameter} value={item.diameter.toString()} className="text-right justify-end">
                      {item.diameter}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="spacing" className="block text-right">מרווח בין מוטות (ס"מ)</Label>
              <Select value={spacing} onValueChange={setSpacing}>
                <SelectTrigger id="spacing" className="text-right">
                  <SelectValue placeholder="בחר מרווח" />
                </SelectTrigger>
                <SelectContent>
                  {spacings.map(item => <SelectItem key={item} value={item.toString()} className="text-right justify-end">
                      {item}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="block text-right">סוג רשת</Label>
            <RadioGroup value={meshType} onValueChange={setMeshType} className="flex flex-col space-y-1">
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <Label htmlFor="single" className="text-right">רשת חד-כיוונית</Label>
                <RadioGroupItem value="single" id="single" />
              </div>
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <Label htmlFor="double" className="text-right">רשת שתי-וערב</Label>
                <RadioGroupItem value="double" id="double" />
              </div>
            </RadioGroup>
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
        </div>

        {!isMobile && <MeshFormulaExplanation />}
      </CardContent>
    </Card>;
};
export default SteelMeshCalculator;