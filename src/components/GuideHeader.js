import React, { useState, useEffect } from 'react';
import { Home, Search, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { searchSiteContent } from '@/services/searchService';

const GuideHeader = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    if (searchQuery) {
      const results = searchSiteContent(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">פתח תפריט</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-right">מדריך התקנה לקבלנים</SheetTitle>
              <SheetDescription className="text-right">
                ניווט מהיר בין פרקי המדריך
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-4">
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/')}>
                <span>דף הבית</span>
                <Home className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/1')}>
                <span>פרק 1 - הקדמה ומונחים</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/2')}>
                <span>פרק 2 - תקנים וחומרים</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/chapter/3')}>
                <span>פרק 3 - שיטות התקנה</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/conversion')}>
                <span>ממיר מידות</span>
              </Button>
              <Button variant="ghost" className="justify-end" onClick={() => navigate('/glossary')}>
                <span>מילון מונחים</span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="md:mr-2 flex-1 md:flex-none">
          <Button variant="link" onClick={() => navigate('/')} className="font-heading text-lg font-bold">
            מדריך התקנה לקבלנים
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
                    placeholder="חיפוש במדריך..."
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
                    placeholder="חיפוש בכל המדריך..."
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                    className="text-right"
                  />
                  <CommandList>
                    <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
                    {searchResults.length > 0 && (
                      <>
                        <CommandGroup heading="תוצאות חיפוש" className="text-right">
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
                      <CommandGroup heading="חיפוש במילון" className="text-right">
                        <CommandItem 
                          onSelect={() => handleSearch(searchQuery)}
                          className="justify-end"
                        >
                          <span>חפש &quot;{searchQuery}&quot; במילון מונחים</span>
                          <Search className="ml-2 h-4 w-4" />
                        </CommandItem>
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <nav className="hidden md:flex items-center gap-5">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Home className="ml-2 h-4 w-4" />
              ראשי
            </Button>
            <Button variant="ghost" onClick={() => navigate('/tutorials')}>סרטוני הדרכה</Button>
            <Button variant="ghost" onClick={() => navigate('/conversion')}>ממיר מידות</Button>
            <Button variant="ghost" onClick={() => navigate('/glossary')}>מילון מונחים</Button>
          </nav>
          <Button variant="ghost" size="icon" onClick={() => navigate('/settings')}>
            <Settings className="h-5 w-5" />
            <span className="sr-only">הגדרות</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default GuideHeader;