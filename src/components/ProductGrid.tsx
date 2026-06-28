import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products, bundles } from '../data/products';
import TrustBadges from './TrustBadges';
import BundleDeals from './BundleDeals';
import StockUrgency from './StockUrgency';

export default function ProductGrid() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const showBundles = searchParams.get('bundles') === 'true';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (category) {
      result = result.filter(p => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [category, search]);

  if (showBundles) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BundleDeals />
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All Products</h2>
          <p className="text-gray-500 mb-8">Add individual items to your cart or build your own bundle</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {category ? `${category} Products` : search ? `Search: "${search}"` : 'All Products'}
          </h2>
          <p className="text-gray-500 mt-1">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No products found</p>
          <p className="text-gray-400 text-sm mt-1">Try a different search or category</p>
        </div>
      )}

      <StockUrgency />
      <TrustBadges />
    </section>
  );
}
