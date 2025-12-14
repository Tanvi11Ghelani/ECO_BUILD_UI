import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import ChaptersList from './guide-chapters/ChaptersList';
const GuideChaptersCard = () => {
  return <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl">פרקי המדריך</CardTitle>
        <BookOpen className="h-5 w-5 text-guide-primary" />
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="mb-4">גישה מהירה לכל פרקי המדריך</CardDescription>
        <ChaptersList />
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/chapter/1">התחל ללמוד</Link>
        </Button>
      </CardFooter>
    </Card>;
};
export default GuideChaptersCard;