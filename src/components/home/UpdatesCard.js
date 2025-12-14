import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const UpdatesCard = () => {
  return <Card>
      <CardHeader>
        <CardTitle>עדכונים אחרונים</CardTitle>
        <CardDescription>שינויים ותוספות למדריך</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">עדכון פרק 3 - שיטות התקנה</h4>
              <p className="text-sm text-muted-foreground">נוספו הנחיות חדשות להתקנה בהתאם לתקן הישראלי החדש</p>
            </div>
            <div className="text-sm text-muted-foreground">לפני 3 ימים</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">הוספו 12 מונחים חדשים למילון</h4>
              <p className="text-sm text-muted-foreground">מונחים מקצועיים בתחום הצנרת והאינסטלציה</p>
            </div>
            <div className="text-sm text-muted-foreground">לפני שבוע</div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">שיפורים לממיר המידות</h4>
              <p className="text-sm text-muted-foreground">נוספו יחידות מידה חדשות והמרות מדויקות יותר</p>
            </div>
            <div className="text-sm text-muted-foreground">לפני שבועיים</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="px-0">צפה בכל העדכונים</Button>
      </CardFooter>
    </Card>;
};
export default UpdatesCard;