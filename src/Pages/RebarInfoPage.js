import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ruler, Weight } from 'lucide-react';
import RebarCalculator from '@/components/home/rebar-info/RebarCalculator';
import RebarList from '@/components/home/rebar-info/RebarList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Footer from '@/components/home/Footer';
import SteelMeshInfo from '@/components/home/rebar-info/SteelMeshInfo';
import { useIsMobile } from '@/hooks/use-mobile';
const RebarInfoPage = () => {
  const isMobile = useIsMobile();
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-4 md:py-8">
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className={`${isMobile ? 'text-xl' : 'text-2xl'}`}>מפרט מוטות זיון</CardTitle>
            <div className="flex gap-2">
              <Weight className="h-5 w-5 md:h-6 md:w-6 text-guide-primary" />
              <Ruler className="h-5 w-5 md:h-6 md:w-6 text-guide-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-right">
              מידע מפורט על קוטר ומשקל מוטות זיון ורשתות זיון לפי התקן הישראלי. הטבלאות מציגות את ההתאמה בין קוטר המוט למשקלו למטר אורך.
            </p>
            
            <Tabs defaultValue="rebar" className="mb-8">
              <TabsList className={`mb-4 flex justify-end w-full bg-guide-accent p-1 rounded-lg ${isMobile ? 'flex-col' : ''}`}>
                <TabsTrigger value="rebar" className={`order-1 px-4 py-2 md:px-6 md:py-2.5 text-base font-medium transition-all data-[state=active]:bg-guide-primary data-[state=active]:text-white ${isMobile ? 'mb-1' : ''}`}>
                  מוטות זיון
                </TabsTrigger>
                <TabsTrigger value="mesh" className="order-2 px-4 py-2 md:px-6 md:py-2.5 text-base font-medium transition-all data-[state=active]:bg-guide-primary data-[state=active]:text-white">
                  רשתות זיון
                </TabsTrigger>
              </TabsList>
              <TabsContent value="rebar">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-right">מוטות זיון</h3>
                  <RebarList />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-right">מחשבון ברזל לקירות</h3>
                  <RebarCalculator />
                </div>
              </TabsContent>
              <TabsContent value="mesh">
                <SteelMeshInfo />
              </TabsContent>
            </Tabs>
            
            <div className="bg-muted p-4 rounded-md mt-4">
              <h3 className="text-lg font-semibold mb-2 text-right">הערות חשובות:</h3>
              <ul className="list-disc list-inside space-y-2 mr-4 text-sm text-right">
                <li>המשקלים המצוינים הם למטר אורך של מוט בודד או למטר מרובע של רשת</li>
                <li>יש להתייחס לתקן הישראלי לברזל זיון (ת"י 4466)</li>
                <li>סוג הפלדה המומלץ לשימוש: פ-500</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>;
};
export default RebarInfoPage;