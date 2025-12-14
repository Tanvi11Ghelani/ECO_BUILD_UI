import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
const GlossaryCard = () => {
  return <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl">מילון מונחים</CardTitle>
        <Book className="h-5 w-5 text-guide-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="mb-4">מילון מונחים מקצועיים לתחום הבנייה</CardDescription>
        <p className="text-sm text-muted-foreground mb-2">מצאו את התרגום העברי למונחים אמריקאיים:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>מונחי בנייה מקצועיים</li>
          <li>חומרים ותקנים</li>
          <li>כלי עבודה ואביזרים</li>
          <li>שיטות עבודה ותהליכים</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/glossary">פתח את המילון</Link>
        </Button>
      </CardFooter>
    </Card>;
};
export default GlossaryCard;