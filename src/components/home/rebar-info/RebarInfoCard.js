import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter } from '@/components/ui/card';
import CardContainer from '../cards/CardContainer';
import RebarList from './RebarList';
const RebarInfoCard = () => {
  return <CardContainer title="מפרט מוטות זיון" icon={Ruler}>
      <CardDescription className="mb-4">מידע על קוטר ומשקל מוטות זיון</CardDescription>
      <RebarList />
      <p className="text-sm text-muted-foreground my-4">
        טבלת התאמה בין קוטר המוט למשקלו למטר אורך ומחשבון לחישוב כמות ברזל נדרשת לקירות
      </p>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/rebar-info">מידע נוסף על מוטות ורשתות זיון</Link>
        </Button>
      </CardFooter>
    </CardContainer>;
};
export default RebarInfoCard;