import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Truck } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import { products } from '../data/products';

export default function Navigation() {
  const { totalItems, toggleCart } = useCartContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = [...new Set(products.map(p => p.category))];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-bold text-xl text-brand-900 hidden sm:block">CabinClear</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => navigate(`/?category=${encodeURIComponent(cat)}`)}
                className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => navigate('/?bundles=true')}
              className="text-sm text-accent-600 hover:text-accent-700 font-medium transition-colors"
            >
              Bundles
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-300 text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 text-sm font-medium"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { navigate(`/?category=${encodeURIComponent(cat)}`); setMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => { navigate('/?bundles=true'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-accent-600 font-medium"
            >
              Bundle Deals
            </button>
            <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500">
              <Truck className="w-4 h-4" />
              <span>Free shipping on orders over £20</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
