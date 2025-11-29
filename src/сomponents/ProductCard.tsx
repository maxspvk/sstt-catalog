import React from 'react';
import type { Product } from '../types';
import { Tag, Settings, Warehouse } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
          
          <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900 dark:text-white">
            {product.name}
          </h2>
          
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            <div className="mt-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
            Cross-References:
            </div>
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
