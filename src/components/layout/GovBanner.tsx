import { Link } from "react-router-dom";
import { ThemeToggle } from "../theme/ThemeToggle";
import { useUIStore } from "@/stores/useUIStore";
import { Landmark, LogIn, User } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";

export function GovBanner() {
  const { fontSizeMultiplier, setFontSizeMultiplier } = useUIStore();
  const { isLoggedIn, username } = useAuthStore();

  return (
    <div className="w-full bg-[#2B4C7E] text-on-tertiary z-50 relative">
      <div className="w-full px-4 lg:px-8 flex items-center justify-between max-w-[1600px] mx-auto py-1">
        <div className="flex items-center gap-6">
        <span className="font-label-md text-label-md flex items-center gap-2">
          <Landmark className="w-4 h-4" />
          <span className="hidden sm:inline">Government of Kerala</span>
          <span className="sm:hidden">Govt. of Kerala</span>
        </span>
        <div className="hidden md:flex items-center gap-4 border-l border-on-tertiary/20 pl-4">
          <a href="#" className="font-label-md text-label-md hover:text-kerala-gold transition-colors">National Portal of India</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4 border-r border-on-tertiary/20 pr-4">
          <button 
            onClick={() => setFontSizeMultiplier(Math.max(0.8, fontSizeMultiplier - 0.1))}
            className="font-label-md text-label-md hover:bg-white/10 p-1 rounded transition-colors"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <button 
            onClick={() => setFontSizeMultiplier(1)}
            className="font-label-md text-label-md hover:bg-white/10 p-1 rounded font-bold transition-colors"
            aria-label="Reset font size"
          >
            A
          </button>
          <button 
            onClick={() => setFontSizeMultiplier(Math.min(1.2, fontSizeMultiplier + 0.1))}
            className="font-label-md text-label-md hover:bg-white/10 p-1 rounded transition-colors"
            aria-label="Increase font size"
          >
            A+
          </button>
          <div className="ml-2 pl-2 border-l border-on-tertiary/20">
            <ThemeToggle />
          </div>
        </div>
        {isLoggedIn ? (
          <Link to="/" className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-100 flex items-center justify-center overflow-hidden border border-white hover:scale-105 transition-all shadow-sm" title={`Logged in as ${username}. Click to view dashboard.`}>
            <User className="w-4 h-4" />
          </Link>
        ) : (
          <Link to="/schools" className="bg-kerala-gold text-institutional-navy px-4 py-1 rounded-lg font-label-lg text-label-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2">
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        )}
      </div>
      </div>
    </div>
  );
}
