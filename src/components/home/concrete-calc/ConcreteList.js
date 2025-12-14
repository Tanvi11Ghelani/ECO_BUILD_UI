import React from 'react';
import { Cuboid } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const concreteInfo = [{
  type: 'קיר ליבה 15 ס"מ',
  calc: '7 מ"ר = 1 מ"ק'
}, {
  type: 'קיר ליבה 20 ס"מ',
  calc: '5 מ"ר = 1 מ"ק'
}, {
  type: 'קיר ליבה +',
  calc: 'בהתאם למפרט'
}, {
  type: 'רצפה/תקרה',
  calc: 'שטח × עובי היציקה'
}];
const ConcreteList = () => {
  return <ScrollArea className="h-[160px] rounded-md">
      <Accordion type="single" collapsible className="w-full">
        {concreteInfo.map(({
        type,
        calc
      }, index) => <AccordionItem key={type} value={`item-${index}`}>
            <AccordionTrigger className="flex items-center gap-2 flex-row-reverse justify-end py-2">
              <span className="text-muted-foreground text-right">
                {type}
              </span>
              <Cuboid className="h-4 w-4 text-guide-primary flex-shrink-0" />
            </AccordionTrigger>
            <AccordionContent className="text-right pr-6">
              <span className="text-muted-foreground">{calc}</span>
            </AccordionContent>
          </AccordionItem>)}
      </Accordion>
    </ScrollArea>;
};
export default ConcreteList;