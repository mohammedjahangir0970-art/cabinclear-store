import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Truck, Shield, CreditCard, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-xl text-white">CabinClear</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Premium car interior accessories for UK drivers. Transform your cabin into a clean, organised space you actually enjoy driving in.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-accent-400" />
              <span>Made with care for UK drivers</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/?category=Cleaning" className="hover:text-white transition-colors">Cleaning</Link></li>
              <li><Link to="/?category=Organisation" className="hover:text-white transition-colors">Organisation</Link></li>
              <li><Link to="/?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/?bundles=true" className="hover:text-white transition-colors">Bundle Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free shipping over £20</li>
              <li className="flex items-center gap-2"><Shield className="w-4 h-4" /> 30-day returns</li>
              <li className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> Secure Stripe checkout</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@cabinclear.uk</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> Coming soon</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> UK Stock — Ships in 3-5 days</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          <p>© 2026 CabinClear UK. All rights reserved. National Star Trading Ltd.</p>
          <p className="mt-1">Prices shown are the lowest in the UK. We beat Amazon on every product.</p>
        </div>
      </div>
    </footer>
  );
}
