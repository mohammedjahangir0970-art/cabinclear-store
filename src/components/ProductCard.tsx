import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Zap } from 'lucide-react';
import type { Product } from '../data/products';
import { useCartContext } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartContext();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.slug}`} className="block relative">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-brand-600 transition-colors">
            {product.shortName}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString()})</span>
          </div>
        </Link>
        <div className="flex items-end gap-2 mb-3">
          <span className="text-xl font-bold text-brand-700">£{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-400 line-through">£{product.originalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={() => { addItem(product); openCart(); }}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium text-sm transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
        {product.stock <= 15 && (
          <div className="flex items-center gap-1.5 mt-2 text-red-500 text-xs">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Only {product.stock} left — selling fast!</span>
          </div>
        )}
      </div>
    </div>
  );
}
