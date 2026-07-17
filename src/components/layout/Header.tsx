import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import { topLevelNav } from "@/data/navigation";
import { useUIStore } from "@/stores/useUIStore";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { toggleMobileDrawer } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="relative flex items-center shrink-0">
            <input 
              type="text" 
              placeholder="Search KTU..." 
              className="w-44 xl:w-60 px-4 py-2.5 pl-11 text-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-kerala-gold bg-white/10 text-white placeholder-white/50 transition-all"
            />
            <Search className="w-4 h-4 absolute left-4 text-white/60" />
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md p-4 animate-in slide-in-from-top-2">
           <input 
            type="text" 
            placeholder="Search KTU portal..." 
            className="w-full px-4 py-2 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-kerala-gold bg-white/10 text-white placeholder-white/50"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}
