import type { Product } from './types';

// TIER 3: DATA PERSISTENCE LAYER (Mock)
// In a real app, this would be a JSON file or SQL database.
// Context: Computational Linguistics resources (PhD research topic).

export const MOCK_DB_PRODUCTS: Product[] = [
  {
    sku: "753420-0005",
    name: "Turbocharger GT1544V",
    cross: "Nissens - 93037; Jrone - 8G15-300-310; SL Turbo - 200301090130; EE turbo - Turbo-G053.",
    engines: "D4164T",
    manufacturer: "Garrett",
    imageUrl: "/753420-0005.jfif"
  },
  {
    sku: "54359880000",
    name: "Turbocharger KP35",
    cross: "Nissens - 93073; Jrone - 8B35-200-028; SL Turbo - 200102090104; EE turbo - Turbo-K006S.",
    engines: "K9K",
    manufacturer: "KKK",
    imageUrl: "/54359880000.jpg"
  },
  {
    sku: "765155-0008",
    name: "Turbocharger GTA2056VK",
    cross: "Nissens - 93115; Jrone - 8G20-300-788; SL Turbo - 200401121270; EE turbo - Turbo-G143S.",
    engines: "OM642",
    manufacturer: "Garrett",
    imageUrl: "/765155-0008.jpg"
  },
  {
    sku: "1102-015-928",
    name: "Core assembly GT1544V",
    cross: "Jrone - 1000-010-108; SL Turbo - 300001090165; EE turbo - GT15-028.",
    engines: "D4164T",
    manufacturer: "Melett",
    imageUrl: "/1102-015-928.jpg"
  },
  {
    sku: "1850-132-031",
    name: "Electronic Actuator(REA)",
    cross: "Jrone - 2063-050-788; SL Turbo - 301201120083; EE turbo - AC-G260eh.",
    engines: "OM642",
    manufacturer: "Hella",
    imageUrl: "/1850-132-031.jpg"
  }
];
