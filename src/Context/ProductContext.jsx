import { createContext, useContext, useState, useEffect } from "react";
import productosIniciales from "../data/productos";

const ProductContext = createContext();
const STORAGE_KEY = "clickcell_productos";

function cargarProductosGuardados() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    try {
      return JSON.parse(guardado);
    } catch {
      return productosIniciales;
    }
  }
  return productosIniciales;
}

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState(cargarProductosGuardados);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  }, [productos]);

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

  function decreaseStock(id, cantidadComprada) {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, stock: Math.max(0, p.stock - cantidadComprada) } : p
      )
    );
  }

  return (
    <ProductContext.Provider value={{ productos, addProduct, updateProduct, deleteProduct, decreaseStock }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}