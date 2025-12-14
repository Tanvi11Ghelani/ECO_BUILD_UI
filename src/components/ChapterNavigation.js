import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChapterNavigation = ({ currentChapter, totalChapters }) => {
  const navigate = useNavigate();

  const goToPreviousChapter = () => {
    if (currentChapter > 1) {
      navigate(`/chapter/${currentChapter - 1}`);
    } else {
      navigate('/');
    }
  };

  const goToNextChapter = () => {
    if (currentChapter < totalChapters) {
      navigate(`/chapter/${currentChapter + 1}`);
    }
  };

  return (
    <div className="flex justify-between items-center py-4 border-t mt-8">
      <Button
        variant="outline"
        onClick={goToNextChapter}
        disabled={currentChapter >= totalChapters}
        className="flex items-center"
      >
        הבא
        <ChevronLeft className="mr-2 h-4 w-4" />
      </Button>
      <div className="text-sm text-muted-foreground">
        פרק {currentChapter} מתוך {totalChapters}
      </div>
      <Button
        variant="outline"
        onClick={goToPreviousChapter}
        className="flex items-center"
      >
        <ChevronRight className="ml-2 h-4 w-4" />
        {currentChapter > 1 ? 'הקודם' : 'חזרה לדף הבית'}
      </Button>
    </div>
  );
};

export default ChapterNavigation;

