import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// ChapterNavigation component - provides navigation between chapters
const ChapterNavigation = ({ currentChapter, totalChapters }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Navigate to previous chapter or home if on first chapter
  const goToPreviousChapter = () => {
    if (currentChapter > 1) {
      navigate(`/chapter/${currentChapter - 1}`);
    } else {
      navigate('/');
    }
  };

  // Navigate to next chapter if available
  const goToNextChapter = () => {
    if (currentChapter < totalChapters) {
      navigate(`/chapter/${currentChapter + 1}`);
    }
  };

  return (
    <div className="flex justify-between items-center py-4 border-t mt-8">
      {/* Next chapter button */}
      <Button
        variant="outline"
        onClick={goToNextChapter}
        disabled={currentChapter >= totalChapters}
        className="flex items-center"
      >
        {t('guide.next')}
        <ChevronLeft className="mr-2 h-4 w-4" />
      </Button>
      
      {/* Chapter counter with translation */}
      <div className="text-sm text-muted-foreground">
        {t('guide.chapter_of', { current: currentChapter, total: totalChapters })}
      </div>
      
      {/* Previous chapter button or back to home */}
      <Button
        variant="outline"
        onClick={goToPreviousChapter}
        className="flex items-center"
      >
        <ChevronRight className="ml-2 h-4 w-4" />
        {currentChapter > 1 ? t('guide.previous') : t('guide.back_to_home')}
      </Button>
    </div>
  );
};

export default ChapterNavigation;

