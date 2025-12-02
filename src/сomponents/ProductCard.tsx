import React from 'react';
import type { Product } from '../types';
import { Tag, Settings, Warehouse } from 'lucide-react';

/* 
Product card structure 
*/


/* use this component only if you have a product */
interface ProductCardProps {
  product: Product;
  rate?: number;
}

/* product card */
const ProductCard: React.FC<ProductCardProps> = ({ product, rate = 0 }) => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-xl">
      <div className="md:flex items-center">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-contain md:h-48 md:w-48 p-2 rounded-xl" 
            src={product.imageUrl} 
            alt={product.name} 
          />
        </div>
        <div className="p-8 w-full">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold flex items-center gap-1">
            <Tag size={14} /> SKU: {product.sku}
          </div>
          
          <div className="flex justify-between items-start">
            <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900 dark:text-white">
              {product.name}
            </h2>
            <div className="flex flex-col items-end">
              {/* Ціна в USD */}
              <div className="text-xl font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-lg">
                ${product.priceUSD}
              </div>
              {rate > 0 && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  ≈ {Math.round(product.priceUSD * rate).toLocaleString()} UAH
                </div>
              )}
            </div>
          </div>
          
          {/* 1. Заголовок (окремий div) */}
          <div className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
            Cross-References:
          </div>
          
          {/* 2. Текст (окремий p) */}
          <p className="mt-1 text-gray-500 dark:text-gray-300">
            {product.cross}
          </p>
          
          <div className="mt-4 flex items-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Warehouse size={16} /> {product.manufacturer}
            </div>
            <div className="flex items-center gap-1">
              <Settings size={16} />
              {product.engines}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
