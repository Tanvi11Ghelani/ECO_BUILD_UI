import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GuideHeader from '@/components/GuideHeader';
import ChapterNavigation from '@/components/ChapterNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChapterContent from '@/components/chapter/ChapterContent';
import ChapterTables from '@/components/chapter/ChapterTables';
import { chaptersData } from '@/data/chaptersData';
const ChapterPage = () => {
  const {
    chapterId
  } = useParams();
  const chapter = chaptersData.find(chapter => chapter.id === parseInt(chapterId));
  if (!chapter) {
    return <Navigate to="/" />;
  }
  return <div className="min-h-screen">
      <GuideHeader />
      <div className="container py-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">פרק {chapter.id}: {chapter.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2">
                <TabsTrigger value="content">תוכן</TabsTrigger>
                <TabsTrigger value="tables">טבלאות</TabsTrigger>
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
        
        <ChapterNavigation currentChapter={chapter.id} totalChapters={chaptersData.length} />
      </div>
    </div>;
};
export default ChapterPage;