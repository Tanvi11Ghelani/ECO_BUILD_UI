import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListVideo, Video } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
const videoTitles = ["הצהרת הסתייגות והכרת נודורה", "כלי עבודה ממולצים", "הכנת האתר ויסודות", "צעדים ראשונים – הנחת השורה הראשונה", "צעדים ראשונים – הנחת מוטות חיזוק"];
const VideoTutorialsCard = () => {
  return <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl">סרטוני הדרכה</CardTitle>
        <ListVideo className="h-5 w-5 text-guide-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="mb-4">צפו בסרטוני ההדרכה שלנו</CardDescription>
        <p className="text-sm text-muted-foreground mb-4">סדרת סרטונים מקיפה המדגימה את תהליכי ההתקנה השונים וכוללת טיפים מעשיים.</p>
        <ScrollArea className="h-[160px] rounded-md">
          <ul className="space-y-2">
            {videoTitles.map((title, index) => <li key={index} className="flex items-center gap-2 text-sm flex-row-reverse justify-end">
                <span className="text-muted-foreground text-right w-full">{title}</span>
                <Video className="h-4 w-4 text-guide-primary flex-shrink-0" />
              </li>)}
          </ul>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/tutorials">צפה בכל הסרטונים</Link>
        </Button>
      </CardFooter>
    </Card>;
};
export default VideoTutorialsCard;