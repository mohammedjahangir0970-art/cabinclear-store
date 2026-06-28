import { ShieldCheck, Truck, RotateCcw, Lock, Star, BadgeCheck } from 'lucide-react';

const badges = [
  { icon: Truck, text: 'Free UK Shipping', sub: 'On orders over £20' },
  { icon: ShieldCheck, text: '30-Day Returns', sub: 'No questions asked' },
  { icon: Lock, text: 'Secure Checkout', sub: 'Stripe protected' },
  { icon: RotateCcw, text: 'Money-Back Guarantee', sub: 'Full refund if not happy' },
  { icon: Star, text: 'Top Rated Products', sub: '4.5+ star average' },
  { icon: BadgeCheck, text: 'UK Stock', sub: 'Ships in 3-5 days' },
];

export default function TrustBadges() {
  return (
    <section className="mt-12 py-8 border-t border-b border-gray-100">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
              <badge.icon className="w-5 h-5 text-brand-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{badge.text}</p>
              <p className="text-xs text-gray-500">{badge.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
