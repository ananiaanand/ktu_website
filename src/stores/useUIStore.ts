import { create } from 'zustand';

interface UIState {
  isMobileDrawerOpen: boolean;
  setMobileDrawerOpen: (isOpen: boolean) => void;
  toggleMobileDrawer: () => void;
  fontSizeMultiplier: number;
  setFontSizeMultiplier: (multiplier: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileDrawerOpen: false,
  setMobileDrawerOpen: (isOpen) => set({ isMobileDrawerOpen: isOpen }),
  toggleMobileDrawer: () => set((state) => ({ isMobileDrawerOpen: !state.isMobileDrawerOpen })),
  fontSizeMultiplier: 1,
  setFontSizeMultiplier: (multiplier) => set({ fontSizeMultiplier: multiplier }),
}));
