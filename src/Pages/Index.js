import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import WelcomeHeader from '@/components/home/WelcomeHeader';
import GuideChaptersCard from '@/components/home/guide-chapters/GuideChaptersCard';
import VideoTutorialsCard from '@/components/home/video-tutorials/VideoTutorialsCard';
import ConversionToolCard from '@/components/home/ConversionToolCard';
import GlossaryCard from '@/components/home/GlossaryCard';
import UpdatesCard from '@/components/home/UpdatesCard';
import RebarInfoCard from '@/components/home/rebar-info/RebarInfoCard';
import ConcreteCalcCard from '@/components/home/concrete-calc/ConcreteCalcCard';
import Footer from '@/components/home/Footer';
const Index = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <WelcomeHeader />
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GuideChaptersCard />
          <VideoTutorialsCard />
          <RebarInfoCard />
          <ConcreteCalcCard />
          <ConversionToolCard />
          <GlossaryCard />
        </section>
        <section className="mt-12">
          <UpdatesCard />
        </section>
      </main>
      <Footer />
    </div>;
};
export default Index;