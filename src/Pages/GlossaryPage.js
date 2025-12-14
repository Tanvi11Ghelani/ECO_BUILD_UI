import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import GlossarySearch from '@/components/GlossarySearch';
import GlossaryResults from '@/components/GlossaryResults';
import { useGlossarySearch } from '@/hooks/useGlossarySearch';
const GlossaryPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems
  } = useGlossarySearch();
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">מילון מונחי בנייה</h1>
          <p className="text-muted-foreground mb-8">תרגום של מונחים מקצועיים מאנגלית לעברית</p>
          
          <GlossarySearch searchTerm={searchTerm} onSearchChange={setSearchTerm} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} categories={categories} />
          
          <GlossaryResults items={filteredItems} onReset={handleReset} />
        </div>
      </main>
    </div>;
};
export default GlossaryPage;