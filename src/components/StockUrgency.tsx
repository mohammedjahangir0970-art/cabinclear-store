import { Zap } from 'lucide-react';
import { products } from '../data/products';

export default function StockUrgency() {
  const lowStock = products.filter(p => p.stock <= 15).sort((a, b) => a.stock - b.stock);
  if (lowStock.length === 0) return null;

  return (
    <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="w-5 h-5 text-red-500 animate-pulse" />
        <h3 className="font-bold text-gray-900">Selling Fast — Low Stock Alert</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {lowStock.map(product => (
          <div key={product.id} className="flex items-center gap-3 bg-white rounded-xl p-3">
            <img src={product.images[0]} alt={product.shortName} className="w-12 h-12 object-cover rounded-lg" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{product.shortName}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${product.stock <= 5 ? 'bg-red-500' : product.stock <= 10 ? 'bg-orange-500' : 'bg-yellow-500'}`}
                    style={{ width: `${Math.min(100, (product.stock / 50) * 100)}%` }}
                  />
                </div>
                <span className={`text-xs font-bold ${product.stock <= 5 ? 'text-red-600' : 'text-orange-600'}`}>
                  {product.stock} left
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-brand-700">£{product.price.toFixed(2)}</p>
              <p className="text-xs text-gray-400 line-through">£{product.originalPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
