'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { RadixAccentColor } from '@/types/radix';

interface AccentColorContextType {
  accentColor: RadixAccentColor;
  setAccentColor: (color: RadixAccentColor) => void;
}

const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined);

export const useAccentColor = () => {
  const context = useContext(AccentColorContext);
  if (!context) {
    throw new Error('useAccentColor must be used within a ThemeProvider');
  }
  return context;
};

// This component now correctly handles the theme application to avoid SSR issues and client-side flicker.
function ThemedApp({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const { accentColor } = useAccentColor();

  return (
    <Theme appearance={resolvedTheme === 'dark' ? 'dark' : 'light'} accentColor={accentColor}>
      {children}
    </Theme>
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColor] = useState<RadixAccentColor>('indigo');
  const [mounted, setMounted] = useState(false);

  // When the component mounts on the client, load the theme from localStorage.
  useEffect(() => {
    const storedColor = localStorage.getItem('accent-color');
    if (storedColor && (['tomato', 'cyan', 'mint', 'indigo', 'orange', 'grass', 'sky'] as RadixAccentColor[]).includes(storedColor as RadixAccentColor)) {
      setAccentColor(storedColor as RadixAccentColor);
    }
    setMounted(true);
  }, []);

  // When the accent color changes, save it to localStorage.
  useEffect(() => {
    if (mounted) { // Only save to localStorage on the client
      localStorage.setItem('accent-color', accentColor);
    }
  }, [accentColor, mounted]);

  const contextValue = { accentColor, setAccentColor };

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <AccentColorContext.Provider value={contextValue}>
        {/* We only render the themed content once we are mounted on the client to ensure the correct theme is applied */}
        {mounted ? <ThemedApp>{children}</ThemedApp> : null}
      </AccentColorContext.Provider>
    </NextThemesProvider>
  );
}