import type { Product } from '../types';
import { MOCK_DB_PRODUCTS } from '../constants';

/*
TIER 2: Application Logic Layer
Responsible for business rules:
1. How to search (Case insensitive).
2. Validating input.
3. Retreiving data from Tier 3 (MOCK_DB).
*/
export class ProductService {
  
  public findBySku(query: string): Product [] {
    if (!query) return [];

    const normalizedQuery = query.trim().toLowerCase(); // normalizes the query

  return MOCK_DB_PRODUCTS.filter((p) => 
      p.sku.toLowerCase().includes(normalizedQuery) || // includes for SKU to search by part of the number
      p.name.toLowerCase().includes(normalizedQuery) || // search by name
      p.engines.toLowerCase().includes(normalizedQuery) // search by engine
    );
  }

}

 export const productService = new ProductService(); // Singleton instance
