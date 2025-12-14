import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ruler } from 'lucide-react';
const ConversionToolCard = () => {
  return <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl">ממיר מידות</CardTitle>
        <Ruler className="h-5 w-5 text-guide-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="mb-4">המרה מהירה בין מידות אמריקאיות וישראליות</CardDescription>
        <p className="text-sm text-muted-foreground mb-2">המירו בקלות בין יחידות מידה נפוצות:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>אורך (אינץ׳, רגל, יארד לעומת סנטימטר, מטר)</li>
          <li>שטח (רגל מרובע, אקר לעומת מטר מרובע, דונם)</li>
          <li>נפח (גלון, פיינט לעומת ליטר, מטר מעוקב)</li>
          <li>משקל (אונקיה, פאונד לעומת גרם, קילוגרם)</li>
          <li>טמפרטורה (פרנהייט לעומת צלזיוס)</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/conversion">פתח את הממיר</Link>
        </Button>
      </CardFooter>
    </Card>;
};
export default ConversionToolCard;