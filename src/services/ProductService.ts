import type { Product } from '../types';
import { MOCK_DB_PRODUCTS } from '../constants';

/**
 * TIER 2: Application Logic Layer
 * 
 * Responsible for business rules:
 * 1. How to search (Case insensitive).
 * 2. Validating input.
 * 3. Retreiving data from Tier 3 (MOCK_DB).
 * 
 * Principle: Open/Closed (OCP) - We can extend search logic here without changing the UI.
 */
export class ProductService {
  
  public findBySku(query: string): Product [] {
    if (!query) return [];

    const normalizedQuery = query.trim().toLowerCase();

    // or Name (Partial match).
    return MOCK_DB_PRODUCTS.filter((p) => 
      p.sku.toLowerCase().includes(normalizedQuery) || // includes для SKU, щоб шукало по частині номера
      p.name.toLowerCase().includes(normalizedQuery) || // пошук по назві
      p.manufacturer.toLowerCase().includes(normalizedQuery) // пошук по виробнику
    );
  }

}

// Singleton instance
export const productService = new ProductService();
