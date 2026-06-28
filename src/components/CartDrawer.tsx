import { X, Plus, Minus, Trash2, ShoppingBag, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { FREE_SHIPPING_THRESHOLD } from '../data/products';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCartContext();
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);
  const hasFreeShipping = totalPrice >= FREE_SHIPPING_THRESHOLD;

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col cart-drawer">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-600" />
            Your Cart ({totalItems})
          </h2>
          <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some amazing products!</p>
              <button
                onClick={closeCart}
                className="mt-4 px-6 py-2 bg-brand-600 text-white rounded-lg font-medium text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                  <Link to={`/product/${item.product.slug}`} onClick={closeCart} className="shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.slug}`} onClick={closeCart} className="block">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{item.product.shortName}</h3>
                    </Link>
                    <p className="text-sm font-bold text-brand-700 mt-1">£{(item.product.price * item.quantity).toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 p-4 bg-gray-50">
            {/* Free shipping progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-brand-600" />
                  {hasFreeShipping ? (
                    <span className="text-green-600 font-medium">You've got free shipping!</span>
                  ) : (
                    <span className="text-gray-600">Add <span className="font-bold text-brand-700">£{freeShippingRemaining.toFixed(2)}</span> more for free shipping</span>
                  )}
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (totalPrice / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-lg">
                <span className="font-medium text-gray-700">Subtotal</span>
                <span className="font-bold text-gray-900">£{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">Shipping calculated at checkout</p>
              <button className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-bold text-lg transition-colors">
                Checkout — £{totalPrice.toFixed(2)}
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
