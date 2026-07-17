import { Outlet } from "react-router-dom";
import { GovBanner } from "./GovBanner";
import { Header } from "./Header";
import { MobileDrawer } from "./MobileDrawer";
import { Footer } from "./Footer";
import { useThemeStore } from "@/stores/useThemeStore";

export function MainLayout() {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-background text-foreground transition-colors ${theme}`}>
      <GovBanner />
      <Header />
      <MobileDrawer />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
