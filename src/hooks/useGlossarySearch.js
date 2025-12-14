import { useState, useEffect, useMemo } from 'react';
import { glossaryData } from '@/services/searchService';
export const useGlossarySearch = (initialSearchTerm = '') => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchQuery, setSearchQuery] = useState(initialSearchTerm);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Update search query with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(glossaryData.map(item => item.category)));
    return uniqueCategories.sort();
  }, []);

  // Filter glossary items based on search and category
  const filteredItems = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = searchQuery === '' || item.englishTerm.toLowerCase().includes(searchQuery.toLowerCase()) || item.hebrewTerm.includes(searchQuery) || item.definition.includes(searchQuery);
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);
  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems
  };
};