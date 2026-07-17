import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './routes';
import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import { useUIStore } from '@/stores/useUIStore';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  const { theme } = useThemeStore();
  const { fontSizeMultiplier } = useUIStore();

  useEffect(() => {
    // Apply theme class to document body
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Apply font size multiplier to html root so Tailwind's rem units scale proportionally
    document.documentElement.style.fontSize = `${fontSizeMultiplier * 100}%`;
  }, [fontSizeMultiplier]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}
