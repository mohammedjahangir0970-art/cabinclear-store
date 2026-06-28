import React, { createContext, useContext, ReactNode } from 'react';
import { useCart } from '../hooks/useCart';
import type { CartItem } from '../hooks/useCart';

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  showAddedNotification: boolean;
  addItem: (product: CartItem['product'], quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return context;
}
