import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GuideHeader from '@/components/GuideHeader';
import ChapterNavigation from '@/components/ChapterNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChapterContent from '@/components/chapter/ChapterContent';
import ChapterTables from '@/components/chapter/ChapterTables';
import { chaptersData } from '@/data/chaptersData';

// ChapterPage component - displays chapter content with tabs for content and tables
const ChapterPage = () => {
  // Get translation function and chapter ID from URL params
  const { t } = useTranslation();
  const { chapterId } = useParams();
  
  // Find the chapter data based on the chapter ID
  const chapter = chaptersData.find(chapter => chapter.id === parseInt(chapterId));
  
  // If chapter not found, redirect to home page
  if (!chapter) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="min-h-screen">
      <GuideHeader />
      <div className="container py-6">
        <Card>
          <CardHeader>
            {/* Chapter title with translation support */}
            <CardTitle className="text-2xl font-bold">
              {t('guide.chapter')} {chapter.id}: {chapter.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Tabs for switching between content and tables */}
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="content">{t('guide.content')}</TabsTrigger>
                <TabsTrigger value="tables">{t('guide.tables')}</TabsTrigger>
              </TabsList>
              <TabsContent value="content">
                <ChapterContent content={chapter.content} />
              </TabsContent>
              <TabsContent value="tables">
                <ChapterTables tables={chapter.tables} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Navigation component for moving between chapters */}
        <ChapterNavigation currentChapter={chapter.id} totalChapters={chaptersData.length} />
      </div>
    </div>
  );
};

export default ChapterPage;