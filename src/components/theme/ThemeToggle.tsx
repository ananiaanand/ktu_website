import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/useThemeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center gap-1 hover:text-kerala-gold transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <>
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">Light Mode</span>
        </>
      )}
    </button>
  );
}
