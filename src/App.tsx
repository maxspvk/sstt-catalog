import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './сomponents/Header';
import Footer from './сomponents/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';

/* 
App Entry Point
Handles:
1. Context Providers (Theme)
2. Routing (HashRouter for static file compatibility)
3. Layout Structure (Header/Main/Footer)
*/
const App: React.FC = () => {
  return (

      <ThemeProvider> {/* give access to the theme switcher to any button at any depth of the site */}

      <Router> {/* can switch pages in the browser without refreshing */}

        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300">

          <Header /> {/* fix the header regardless of the page */}
          
          {/* look at the site URL and decide what to show */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer /> {/* fix the footer regardless of the page */}
          
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; //allow importing this component
