import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import BundleDeals from './components/BundleDeals';
import StockUrgency from './components/StockUrgency';
import TrustBadges from './components/TrustBadges';
import { useCartContext } from './context/CartContext';
import { CheckCircle } from 'lucide-react';

function AddedNotification() {
  const { showAddedNotification } = useCartContext();
  if (!showAddedNotification) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
      <CheckCircle className="w-5 h-5 text-green-400" />
      <span className="text-sm font-medium">Added to cart!</span>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BundleDeals />
        </div>
        <ProductGrid />
        <StockUrgency />
        <TrustBadges />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
          <AddedNotification />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
