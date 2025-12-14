import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const CardContainer = ({
  title,
  icon: Icon,
  children
}) => {
  return <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl">{title}</CardTitle>
        <Icon className="h-5 w-5 text-guide-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        {children}
      </CardContent>
    </Card>;
};
export default CardContainer;