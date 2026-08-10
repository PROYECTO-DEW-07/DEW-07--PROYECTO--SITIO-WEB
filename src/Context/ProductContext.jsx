import { createContext, useContext, useState } from "react";
import productosIniciales from "../data/productos";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);

  function addProduct(producto) {
    const nuevoId = productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1;
    setProductos((prev) => [...prev, { ...producto, id: nuevoId }]);
  }

  function updateProduct(id, datosActualizados) {
    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...datosActualizados } : p))
    );
  }

  function deleteProduct(id) {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <ProductContext.Provider value={{ productos, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}