import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Over 50,000 happy UK drivers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Car Into a{' '}
            <span className="text-brand-300">Clean, Organised Space</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Premium car interior accessories at unbeatable prices. No more mess, no more stress — just a cabin you actually enjoy driving in.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/?scroll=products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-colors"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/?bundles=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors backdrop-blur-sm"
            >
              View Bundles
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Free UK shipping over £20</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
