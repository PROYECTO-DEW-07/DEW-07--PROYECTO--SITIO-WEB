import { Link } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import ProductCard from "./ProductCard";
import "./ProductosDestacados.css";

function ProductosDestacados() {
  const { productos } = useProducts();

  const destacados = productos
    .filter((producto) => producto.stock > 0)
    .slice(0, 4);

  return (
    <section className="destacados">
      <div className="destacados-encabezado">
        <div>
          <p className="destacados-etiqueta">LO MÁS BUSCADO</p>
          <h2>Productos destacados</h2>
          <p>Equipos seleccionados para que encuentres tu próximo smartphone.</p>
        </div>

        <Link to="/catalogo" className="destacados-enlace">
          Ver catálogo completo →
        </Link>
      </div>

      <div className="destacados-grid">
        {destacados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}

export default ProductosDestacados;