import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const SavedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(SavedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((e) => e.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id != id));
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    const qty = cart.reduce((total, item) => {
      return total + item.qty;
    },0);
    setCartQty(qty);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartQty }}
    >
      {children}
    </CartContext.Provider>
  );
}
