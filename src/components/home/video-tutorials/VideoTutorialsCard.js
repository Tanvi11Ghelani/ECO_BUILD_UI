import React from 'react';
import { Link } from 'react-router-dom';
import { ListVideo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter } from '@/components/ui/card';
import CardContainer from '../cards/CardContainer';
import VideoList from './VideoList';
const VideoTutorialsCard = () => {
  return <CardContainer title="סרטוני הדרכה" icon={ListVideo}>
      <CardDescription className="mb-4">צפו בסרטוני ההדרכה שלנו</CardDescription>
      <p className="text-sm text-muted-foreground mb-4">
        סדרת סרטונים מקיפה המדגימה את תהליכי ההתקנה השונים וכוללת טיפים מעשיים.
      </p>
      <VideoList />
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/tutorials">צפה בכל הסרטונים</Link>
        </Button>
      </CardFooter>
    </CardContainer>;
};
export default VideoTutorialsCard;