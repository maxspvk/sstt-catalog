import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react'; // ReactNode імпортуємо окремо як type
import type { ThemeContextType } from '../types'; // ThemeContextType імпортуємо як type
/**
 * Requirement: "Adjustability" / Dark Mode
 * Uses localStorage for persistence (SSTT requirement).
 */

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // Context Definition: Creates a global state container for theme data.

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  /* Initialize based on localStorage or system preference */
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
/* Updates the HTML DOM classes and persists the choice to LocalStorage. */
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  /* Wraps the application and passes the state down */
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
/* Safely exposes the theme context to components. */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
