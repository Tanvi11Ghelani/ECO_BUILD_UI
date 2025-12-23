import React, { useState, useEffect } from 'react';
import { Home, Search, Settings, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { searchSiteContent } from '@/services/searchService';
import { useTranslation } from 'react-i18next';

const GuideHeader = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  // Handle language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  
  // Search functionality - filter results based on search query
  useEffect(() => {
    if (searchQuery) {
      const results = searchSiteContent(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  // Handle search navigation
  const handleSearch = (query, url) => {
    if (url) {
      navigate(url);
      setSearchOpen(false);
      setSearchQuery('');
    } else if (query) {
      navigate(`/glossary?q=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Mobile menu sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">{t('guide.open_menu')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-right">{t('guide.installation_guide')}</SheetTitle>
              <SheetDescription className="text-right">
                {t('guide.quick_navigation')}
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/')}>
                <span>{t('guide.home')}</span>
                <Home className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/1')}>
                <span>{t('guide.chapter')} 1 - הקדמה ומונחים</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/2')}>
                <span>{t('guide.chapter')} 2 - תקנים וחומרים</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/3')}>
                <span>{t('guide.chapter')} 3 - שיטות התקנה</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/conversion')}>
                <span>{t('guide.conversion')}</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/glossary')}>
                <span>{t('guide.glossary')}</span>
              </Button>
            </nav>
            
            {/* Language switcher in mobile menu */}
            <div className="mt-4 pt-4 border-t">
              <label className="text-sm font-medium mb-2 block text-right">{t('guide.menu')}</label>
              <Select value={i18n.language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="he">עברית</SelectItem>
                  <SelectItem value="ar">العربية</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </SheetContent>
        </Sheet>
        {/* Main title/logo */}
        <div className="md:mr-2 flex-1 md:flex-none">
          <Button variant="link" onClick={() => navigate('/')} className="font-heading text-lg font-bold">
            {t('guide.installation_guide')}
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 space-x-reverse">
          <div className="relative w-full max-w-sm md:max-w-md ml-2">
            <Popover open={searchOpen} onOpenChange={setSearchOpen}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder={t('guide.search_guide')}
                    className="w-full pr-4 pl-8 text-right"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchResults.length > 0) {
                        handleSearch(searchQuery, searchResults[0].url);
                      }
                    }}
                    onClick={() => setSearchOpen(true)}
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[300px] md:w-[400px]" align="end">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput 
                    placeholder={t('guide.search_all_guide')}
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                    className="text-right"
                  />
                  <CommandList>
                    <CommandEmpty>{t('guide.no_results')}</CommandEmpty>
                    {searchResults.length > 0 && (
                      <>
                        <CommandGroup heading={t('guide.search_results')} className="text-right">
                          {searchResults.map((result, index) => (
                            <CommandItem 
                              key={index}
                              onSelect={() => handleSearch(searchQuery, result.url)}
                              className="justify-end"
                            >
                              <div className="text-right">
                                <div className="font-medium">{result.title}</div>
                                <div className="text-xs text-muted-foreground truncate">
                                  {result.description}
                                </div>
                              </div>
                              <Search className="ml-2 h-4 w-4" />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </>
                    )}
                    {searchQuery && (
                      <CommandGroup heading={t('guide.search_glossary')} className="text-right">
                        <CommandItem 
                          onSelect={() => handleSearch(searchQuery)}
                          className="justify-end"
                        >
                          <span>{t('guide.search_in_glossary', { query: searchQuery })}</span>
                          <Search className="ml-2 h-4 w-4" />
                        </CommandItem>
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {/* Desktop navigation menu */}
          <nav className="hidden md:flex items-center gap-5">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Home className="ml-2 h-4 w-4" />
              {t('guide.home')}
            </Button>
            <Button variant="ghost" onClick={() => navigate('/tutorials')}>{t('guide.tutorials')}</Button>
            <Button variant="ghost" onClick={() => navigate('/conversion')}>{t('guide.conversion')}</Button>
            <Button variant="ghost" onClick={() => navigate('/glossary')}>{t('guide.glossary')}</Button>
          </nav>
          
          {/* Language switcher */}
          <Select value={i18n.language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px] hidden md:flex">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="he">עברית</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Settings button */}
          <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
            <Settings className="h-5 w-5" />
            <span className="sr-only">{t('guide.settings')}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default GuideHeader;