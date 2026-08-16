import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(producto, cantidad = 1) {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        const nuevaCantidad = existe.cantidad + cantidad;

        if (nuevaCantidad > producto.stock) {
          return prev;
        }

        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: nuevaCantidad }
            : item
        );
      }

      if (cantidad > producto.stock) {
        return prev;
      }

      return [...prev, { ...producto, cantidad }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const totalItems = cart.reduce(
    (sum, item) => sum + item.cantidad,
    0
  );

  const totalPrecio = cart.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}