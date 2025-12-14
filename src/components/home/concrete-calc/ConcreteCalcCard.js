import React from 'react';
import { Link } from 'react-router-dom';
import { Cuboid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter } from '@/components/ui/card';
import CardContainer from '../cards/CardContainer';
import ConcreteList from './ConcreteList';
const ConcreteCalcCard = () => {
  return <CardContainer title="חישוב כמויות בטון" icon={Cuboid}>
      <CardDescription className="mb-4">מידע על חישוב כמויות בטון לפי סוג היציקה</CardDescription>
      <p className="text-sm text-muted-foreground mb-4">
        טבלת התאמה בין סוג היציקה לכמות הבטון הנדרשת
      </p>
      <ConcreteList />
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/concrete-calc">מידע נוסף על חישובי בטון</Link>
        </Button>
      </CardFooter>
    </CardContainer>;
};
export default ConcreteCalcCard;