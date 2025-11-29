import React, { useState } from 'react';
import { productService } from '../services/ProductService';
import { loggerService } from '../services/LoggerService';
import ProductCard from '../сomponents/ProductCard';
import type { Product } from '../types';
import { Search, AlertCircle } from 'lucide-react';

/**
 * TIER 1: Presentation Layer
 * 
 * Interacts with Tier 2 (ProductService, LoggerService).
 * Does not know how data is stored or how search is implemented.
 */
const Catalog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;

    // Call Tier 2: Product Logic
    const product = productService.findBySku(searchQuery);
    
    // Update UI State
    setSearchResults(product);
    setHasSearched(true);

    if (product.length === 0) {
      setError(`No products found for "${searchQuery}". Check the name or SKU is correct.`);
    } else {
      setError(null);
    }

    // Call Tier 2/3: Logging Logic
    // Requirement: Log date and query
    loggerService.logSearch(searchQuery, !!product);
  };

  return (
    <div className="max-w-3xl mx-auto w-full py-12 px-4">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Cross-Reference Finder
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Find compatible parts by SKU or Number.
        </p>
      </div>

      {/* Search Bar (Requirement: Middle of page) */}
      <form onSubmit={handleSearch} className="relative mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-full leading-5 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary sm:text-lg text-gray-900 dark:text-white shadow-md transition-all"
            placeholder="Enter SKU (e.g., 753420-0005) or Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="absolute inset-y-2 right-2 px-6 bg-primary hover:bg-blue-600 text-white font-medium rounded-full transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results Section */}
      <div className="space-y-6 min-h-[300px]">
        {error && (
          <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 border border-red-200 dark:border-red-800">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                  Search Error
                </h3>
                <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Малюємо список карток, а не одну */}
        {searchResults.length > 0 && (
          <div className="grid grid-cols-1 gap-6 animate-fade-in">
            {searchResults.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        )}

        {/* Перевіряємо довжину масиву */}
        {!hasSearched && searchResults.length === 0 && (
          <div className="text-center text-gray-400 dark:text-gray-600 mt-20">
             Find compatible parts by SKU or Number.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
