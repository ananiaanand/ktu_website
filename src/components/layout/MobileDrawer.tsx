import { Link, useLocation } from "react-router-dom";
import { X, ChevronRight, LogIn } from "lucide-react";
import { navigationData } from "@/data/navigation";
import { useUIStore } from "@/stores/useUIStore";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileDrawer() {
  const { isMobileDrawerOpen, setMobileDrawerOpen } = useUIStore();
  const location = useLocation();

  if (!isMobileDrawerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-in fade-in"
        onClick={() => setMobileDrawerOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-xl z-50 lg:hidden flex flex-col animate-in slide-in-from-left">
        
        {/* Header */}
        <div className="p-4 bg-institutional-navy text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-institutional-navy rounded-full flex items-center justify-center font-bold text-lg">
              KTU
            </div>
            <span className="font-headline-sm text-sm font-semibold">Menu</span>
          </div>
          <button 
            onClick={() => setMobileDrawerOpen(false)}
            className="p-2 hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto py-2">
          <Link 
            to="/"
            onClick={() => setMobileDrawerOpen(false)}
            className={`block px-6 py-4 font-label-lg text-base border-b border-outline/20 ${
              location.pathname === '/' ? 'text-heritage-maroon font-bold dark:text-primary-fixed bg-surface-container-low dark:bg-slate-800' : 'text-slate-gray dark:text-slate-300'
            }`}
          >
            Home
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            {navigationData.map((section, idx) => (
              <AccordionItem value={`item-${idx}`} key={section.title} className="border-b border-outline/20">
                <AccordionTrigger className="px-6 py-4 font-label-lg text-base text-slate-gray dark:text-slate-300 hover:no-underline hover:bg-surface-container-lowest dark:hover:bg-slate-800">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="bg-surface-container-low/50 dark:bg-slate-800/50 pb-0">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center justify-between px-8 py-3 text-sm text-slate-600 dark:text-slate-400 hover:text-heritage-maroon dark:hover:text-primary-fixed border-b border-outline/10 last:border-0"
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Footer Actions */}
        <div className="p-4 border-t border-outline/20 bg-surface-container-lowest dark:bg-slate-900">
          <Link 
            to="/schools" 
            onClick={() => setMobileDrawerOpen(false)}
            className="w-full bg-kerala-gold text-institutional-navy px-4 py-3 rounded-lg font-label-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90"
          >
            <LogIn className="w-5 h-5" />
            Student/Portal Login
          </Link>
        </div>
      </div>
    </>
  );
}
