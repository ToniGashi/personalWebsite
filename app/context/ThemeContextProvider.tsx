'use client';

import type { Dispatch, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => null,
});

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
