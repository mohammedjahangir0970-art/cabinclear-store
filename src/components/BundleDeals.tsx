import { Link } from 'react-router-dom';
import { ShoppingCart, Tag, ArrowRight } from 'lucide-react';
import { bundles, products } from '../data/products';
import { useCartContext } from '../context/CartContext';

export default function BundleDeals() {
  const { addItem, openCart } = useCartContext();

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Tag className="w-5 h-5 text-accent-500" />
        <h2 className="text-2xl font-bold text-gray-900">Bundle Deals</h2>
        <span className="text-sm text-gray-500 ml-2">Save up to 30% with curated bundles</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bundles.map(bundle => {
          const bundleProducts = bundle.products.map(id => products.find(p => p.id === id)!).filter(Boolean);
          return (
            <div key={bundle.id} className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">{bundle.name}</h3>
                <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Save £{bundle.savings.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{bundle.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {bundleProducts.map(p => (
                  <Link key={p.id} to={`/product/${p.slug}`} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded text-gray-600 hover:border-brand-300">
                    {p.shortName}
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-brand-700">£{bundle.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">£{bundle.worth.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    bundleProducts.forEach(p => addItem(p, 1));
                    openCart();
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add Bundle
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium">
          View all products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
