import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import Footer from '@/components/home/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const AboutPage = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">אודות המדריך</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-right">
              מדריך התקנה לקבלנים הוא כלי מקיף המיועד לסייע לקבלנים ואנשי מקצוע בתחום הבנייה.
              המדריך כולל מידע מקצועי, כלי חישוב שימושיים, והנחיות מפורטות לביצוע עבודות בנייה שונות.
            </p>
            <p className="text-right">
              המדריך פותח על ידי צוות מומחים בתחום הבנייה והנדסת בניין, במטרה לספק מקור מידע אמין ונגיש
              לכל העוסקים בתחום.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-semibold mb-2 text-right">המדריך כולל:</h3>
              <ul className="list-disc list-inside space-y-1 text-right">
                <li>הוראות התקנה מפורטות</li>
                <li>מחשבונים לחישובי כמויות</li>
                <li>מפרטים טכניים</li>
                <li>סרטוני הדרכה</li>
                <li>מילון מונחים מקצועי</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>;
};
export default AboutPage;