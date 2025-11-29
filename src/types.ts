// Domain Entity: Product
// Represents the "Item" in our catalog (e.g., Linguistic Corpus)
export interface Product {
  sku: string; // Unique identifier (ISBN/DOI)
  name: string;
  cross: string;
  engines: string;
  manufacturer: string;
  imageUrl: string;
}

// Domain Entity: LogEntry
// Represents a record of user activity
export interface LogEntry {
  timestamp: string;
  query: string;
  resultFound: boolean;
}

// Theme Context Type
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}
