import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Cog, Menu, X} from 'lucide-react';

/**
 * TIER 1: Presentation Layer
 * Requirement: "Immutable Layouts" - Header stays same across pages.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => 
    location.pathname === path ? "text-primary font-bold" : "text-gray-600 dark:text-gray-300 hover:text-primary";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <Cog className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              SSTT<span className="text-primary">Catalog</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>
              Catalog
            </Link>
            <Link to="/about" className={`transition-colors ${isActive('/about')}`}>
              About Project
            </Link>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE Menu Dropdown (Випадаюче меню) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`block py-2 px-3 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? "bg-blue-50 dark:bg-blue-900/20 text-primary" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              Catalog
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`block py-2 px-3 rounded-md text-base font-medium ${
                location.pathname === '/about' 
                  ? "bg-blue-50 dark:bg-blue-900/20 text-primary" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              About Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
