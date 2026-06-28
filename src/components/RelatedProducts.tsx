import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import type { Product } from '../data/products';
import { products } from '../data/products';
import { useCartContext } from '../context/CartContext';

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const { addItem, openCart } = useCartContext();
  const related = products
    .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 4);

  if (related.length === 0) {
    const other = products.filter(p => p.id !== currentProduct.id).slice(0, 4);
    return <RelatedGrid products={other} addItem={addItem} openCart={openCart} />;
  }

  return <RelatedGrid products={related} addItem={addItem} openCart={openCart} />;
}

function RelatedGrid({ products: items, addItem, openCart }: { products: Product[]; addItem: (p: Product) => void; openCart: () => void }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-100 pt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map(product => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <Link to={`/product/${product.slug}`} className="block">
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </Link>
            <div className="p-3">
              <Link to={`/product/${product.slug}`} className="block">
                <h3 className="text-sm font-medium text-gray-900 truncate">{product.shortName}</h3>
              </Link>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-gray-500">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-brand-700 text-sm">£{product.price.toFixed(2)}</span>
                <button
                  onClick={() => { addItem(product); openCart(); }}
                  className="p-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
