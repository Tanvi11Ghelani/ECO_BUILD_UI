import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardDescription, CardFooter } from '@/components/ui/card';
import CardContainer from '../cards/CardContainer';
import ChaptersList from './ChaptersList';
import { useIsMobile } from '@/hooks/use-mobile';
const GuideChaptersCard = () => {
  const isMobile = useIsMobile();
  return <CardContainer title="פרקי המדריך" icon={BookOpen}>
      <CardDescription className={`${isMobile ? 'mb-2' : 'mb-4'}`}>גישה מהירה לכל פרקי המדריך</CardDescription>
      <ChaptersList />
      <CardFooter className="px-0">
        <Button asChild className="w-full">
          <Link to="/chapter/1">התחל ללמוד</Link>
        </Button>
      </CardFooter>
    </CardContainer>;
};
export default GuideChaptersCard;