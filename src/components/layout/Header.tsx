import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { topLevelNav } from "@/data/navigation";
import { useUIStore } from "@/stores/useUIStore";
import { SEARCH_INDEX } from "@/data/searchIndex";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { toggleMobileDrawer } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchQuery.length > 1 
    ? SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8) 
    : [];

  const handleResultClick = () => {
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  const SearchResultsDropdown = () => {
    if (!searchQuery) return null;
    return (
      <div className="absolute top-full mt-3 right-0 w-[92vw] lg:w-[450px] xl:w-[500px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
        <div className="p-3 border-b border-outline-variant/20 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
          <span className="font-label-md text-xs text-slate-gray font-semibold">Search Results</span>
          <button onClick={() => setSearchQuery("")} className="text-slate-gray hover:text-error transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="flex flex-col">
              {filteredResults.map((item) => (
                <Link 
                  key={item.id} 
                  to={item.href}
                  onClick={handleResultClick}
                  className="flex items-start justify-between gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 border-b last:border-0 border-outline-variant/10 transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-headline-sm text-sm font-bold text-on-surface dark:text-white group-hover:text-heritage-maroon dark:group-hover:text-primary-fixed transition-colors">
                        {item.title}
                      </span>
                      <span className="font-label-md text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-gray dark:text-slate-300 font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-slate-gray dark:text-slate-400 line-clamp-1">{item.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-gray/30 group-hover:text-heritage-maroon transition-colors shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-gray font-body-md text-sm">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-institutional-navy/95 backdrop-blur-md shadow-md py-1" : "bg-institutional-navy py-2"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        
        {/* Logo Section — pinned flush to the left edge */}
        <Link to="/" className="flex items-center group shrink-0">
          <img 
            src="/new-logo.png" 
            alt="KTU Logo" 
            className="w-48 md:w-64 lg:w-80 h-auto max-h-16 md:max-h-20 object-contain object-left scale-125 md:scale-[1.5] origin-left transition-transform"
          />
        </Link>

        {/* Desktop Navigation & Search */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 pr-6 xl:pr-10">
          <nav className="flex items-center gap-7 xl:gap-10">
            {topLevelNav.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className={`font-label-lg text-label-lg transition-colors pb-1 border-b-2 whitespace-nowrap ${
                    isActive 
                      ? "text-kerala-gold border-kerala-gold" 
                      : "text-white/80 border-transparent hover:text-white hover:border-kerala-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Static Search Bar */}
          <div ref={searchRef} className="relative flex items-center shrink-0">
            <input 
              type="text" 
              placeholder="Search KTU..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-44 xl:w-60 px-4 py-2.5 pl-11 text-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-kerala-gold bg-white/10 text-white placeholder-white/50 transition-all"
            />
            <Search className="w-4 h-4 absolute left-4 text-white/60" />
            <div className="hidden lg:block">
              <SearchResultsDropdown />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-4 pr-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-white/70 dark:text-slate-300"
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleMobileDrawer}
            className="p-2 bg-white/10 text-white rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Horizontal Navigation */}
      <div className="lg:hidden w-full overflow-x-auto bg-institutional-navy/95 border-t border-white/10 shadow-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-6 px-4 py-3 min-w-max">
          {topLevelNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.href} 
                to={item.href}
                className={`font-label-md text-sm transition-colors whitespace-nowrap ${
                  isActive 
                    ? "text-kerala-gold font-bold border-b border-kerala-gold pb-0.5" 
                    : "text-white/80 hover:text-white pb-0.5 border-b border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Search Bar (Expandable) */}
      {isSearchOpen && (
        <div ref={searchRef} className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md p-4 animate-in slide-in-from-top-2 border-t border-outline-variant/10">
           <div className="relative">
             <input 
              type="text" 
              placeholder="Search KTU portal..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 border border-outline-variant/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-kerala-gold bg-slate-100 dark:bg-slate-800 text-on-surface dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
              autoFocus
             />
             <Search className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
           </div>
           <div className="relative mt-2">
             <SearchResultsDropdown />
           </div>
        </div>
      )}
    </header>
  );
}
