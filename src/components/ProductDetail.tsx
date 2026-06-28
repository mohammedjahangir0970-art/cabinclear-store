import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, ChevronLeft, ChevronRight, Check, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { products, FREE_SHIPPING_THRESHOLD } from '../data/products';
import { useCartContext } from '../context/CartContext';
import Reviews from './Reviews';
import RelatedProducts from './RelatedProducts';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartContext();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400 text-lg">Product not found</p>
        <Link to="/" className="text-brand-600 hover:underline mt-2 inline-block">Back to home</Link>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const hasFreeShipping = product.price * quantity >= FREE_SHIPPING_THRESHOLD;

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  const nextImage = () => setSelectedImage(prev => (prev + 1) % product.images.length);
  const prevImage = () => setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-brand-500' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">{product.category}</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviewCount.toLocaleString()} reviews)</span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-3xl font-bold text-brand-700">£{product.price.toFixed(2)}</span>
            <span className="text-lg text-gray-400 line-through">£{product.originalPrice.toFixed(2)}</span>
            {discount > 0 && (
              <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">Save {discount}%</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Trust */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Truck className="w-4 h-4 text-brand-600" />
              <span>{hasFreeShipping ? 'Free shipping' : `Free shipping over £${FREE_SHIPPING_THRESHOLD}`}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <Shield className="w-4 h-4 text-brand-600" />
              <span>30-day returns</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <RotateCcw className="w-4 h-4 text-brand-600" />
              <span>Money-back guarantee</span>
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-200 rounded-xl">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-l-xl"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-r-xl"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-bold transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart — £{(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-3">
              {product.specifications.map((spec, i) => (
                <div key={i}>
                  <p className="text-xs text-gray-500">{spec.label}</p>
                  <p className="text-sm font-medium text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Reviews product={product} />
      <RelatedProducts currentProduct={product} />
    </div>
  );
}
