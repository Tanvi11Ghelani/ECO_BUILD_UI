import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cuboid } from 'lucide-react';
import ConcreteCalculator from '@/components/home/concrete-calc/ConcreteCalculator';
import Footer from '@/components/home/Footer';
const ConcreteCalcPage = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-2xl">חישוב כמויות בטון</CardTitle>
            <Cuboid className="h-6 w-6 text-guide-primary" />
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              מחשבון כמויות בטון לחישוב נפח בטון נדרש עבור רצפות, תקרות וקירות. הזן את המידות הנדרשות לקבלת תוצאה מדויקת.
            </p>
            <div className="mb-8">
              <ConcreteCalculator />
            </div>
            <div className="bg-muted p-4 rounded-md mt-4">
              <h3 className="text-lg font-semibold mb-2">הנחיות לחישוב:</h3>
              <ul className="list-disc list-inside space-y-2 mr-4 text-sm">
                <li>חישוב נפח בטון: אורך × רוחב × גובה = נפח במ"ק</li>
                <li>יש להוסיף 5%-10% לכמות המחושבת לצורך פחת</li>
                <li>בתקרות ורצפות יש להתחשב בעובי היציקה המדויק</li>
                <li>לקירות יש להתייחס לעובי הקיר בס"מ</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>;
};
export default ConcreteCalcPage;