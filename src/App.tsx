import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './сomponents/Header';
import Footer from './сomponents/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';

/**
 * App Entry Point
 * Handles:
 * 1. Context Providers (Theme)
 * 2. Routing (HashRouter for static file compatibility)
 * 3. Layout Structure (Header/Main/Footer)
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
