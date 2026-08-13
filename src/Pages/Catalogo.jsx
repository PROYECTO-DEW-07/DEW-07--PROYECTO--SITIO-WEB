import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";  
import ProductCard from "../components/ProductCard";

const marcas = ["Todos", "Apple", "Samsung", "Xiaomi", "Poco", "Motorola"];

function Catalogo() {
  const [searchParams] = useSearchParams();
  const { productos } = useProducts();
  const marcaDesdeUrl = searchParams.get("marca");

  const marcaInicial = marcaDesdeUrl
    ? marcaDesdeUrl.charAt(0).toUpperCase() + marcaDesdeUrl.slice(1)
    : "Todos";

  const [filtro, setFiltro] = useState(marcaInicial);

  const productosFiltrados =
    filtro === "Todos" ? productos : productos.filter((p) => p.marca === filtro);

  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Catálogo de Equipos</h1>
        <p style={styles.heroSubtitle}>Encuentra el smartphone ideal para ti</p>
      </div>

      <div style={styles.filtros}>
        {marcas.map((marca) => (
          <button
            key={marca}
            onClick={() => setFiltro(marca)}
            style={filtro === marca ? styles.filtroBtnActivo : styles.filtroBtn}
          >
            {marca}
          </button>
        ))}
      </div>

      <div style={styles.main}>
        {productosFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b" }}>
            No hay productos para esta marca.
          </p>
        ) : (
          <div style={styles.grid}>
            {productosFiltrados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  hero: {
    background: "#eaf3f4",
    textAlign: "center",
    padding: "40px",
  },
  heroTitle: {
    color: "#1D4ED8",
    fontSize: "36px",
    fontWeight: 800,
    margin: "0 0 8px",
  },
  heroSubtitle: {
    color: "#1E293B",
    fontSize: "16px",
    opacity: 0.85,
    margin: 0,
  },
  filtros: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    padding: "20px",
    background: "white",
    borderBottom: "1px solid #e2e8f0",
    flexWrap: "wrap",
  },
  filtroBtn: {
    padding: "10px 24px",
    borderRadius: "999px",
    border: "2px solid #1D4ED8",
    background: "white",
    color: "#0f2d6b",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  filtroBtnActivo: {
    padding: "10px 24px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)",
    color: "white",
    fontWeight: 600,
    fontSize: "14px",
    cursor: "pointer",
  },
  main: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "40px 60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
  },
};

export default Catalogo;