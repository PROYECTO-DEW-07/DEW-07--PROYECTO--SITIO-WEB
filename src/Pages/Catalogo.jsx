import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import ProductCard from "../components/ProductCard";
import "./Catalogo.css";

const marcas = ["Todos", "Apple", "Samsung", "Xiaomi", "Poco", "Motorola"];

function Catalogo() {
  const { productos } = useProducts();
  const [searchParams] = useSearchParams();
  const marcaDesdeUrl = searchParams.get("marca");

  const marcaInicial = marcaDesdeUrl
    ? marcaDesdeUrl.charAt(0).toUpperCase() + marcaDesdeUrl.slice(1)
    : "Todos";

  const [filtro, setFiltro] = useState(marcaInicial);

  const productosFiltrados =
    filtro === "Todos" ? productos : productos.filter((p) => p.marca === filtro);

  return (
    <div>
      <div className="catalogo-hero">
        <h1 className="catalogo-hero-title">Catálogo de Equipos</h1>
        <p className="catalogo-hero-subtitle">Encuentra el smartphone ideal para ti</p>
      </div>

      <div className="catalogo-filtros">
        {marcas.map((marca) => (
          <button
            key={marca}
            onClick={() => setFiltro(marca)}
            className={filtro === marca ? "filtro-btn-activo" : "filtro-btn"}
          >
            {marca}
          </button>
        ))}
      </div>

      <div className="catalogo-main">
        {productosFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>
            No hay productos para esta marca.
          </p>
        ) : (
          <div className="catalogo-grid">
            {productosFiltrados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalogo;