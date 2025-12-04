import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

/**
 * Requirement: "Buttons with icons (pictograms)"
 */
const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme(); // Access global state (isDark) and the switcher function (toggleTheme) from Context

  return (
    /* Event Listener: Triggers the theme change logic when clicked. */
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
    >
      {/* Logic: If Dark Mode is active, show Sun icon. Otherwise, show Moon. */}
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
