import { Link } from "react-router-dom";
import "./Marcas.css";

const marcas = [
  { nombre: "Apple", tag: "🔥 Más vendida", precio: "Desde S/ 999", slug: "apple", logo: "/productos/apple-logo1.png" },
  { nombre: "Samsung", tag: "⭐ Recomendado", precio: "Desde S/ 699", slug: "samsung", logo: "/productos/samsung1-logo.png" },
  { nombre: "Xiaomi", tag: "💰 Mejor precio", precio: "Desde S/ 399", slug: "xiaomi", logo: "/productos/xiaomi-logo.png" },
  { nombre: "Poco", tag: "⚡ Máxima potencia", precio: "Desde S/ 449", slug: "poco", logo: "/productos/poco-logo.png" },
  { nombre: "Motorola", tag: "🎯 Buena relación calidad-precio", precio: "Desde S/ 349", slug: "motorola", logo: "/productos/motorola-logo.webp" },
];

function Marcas() {
  return (
    <section className="marcas-section">
      <h2 className="marcas-title">¡ELIGE TU MARCA FAVORITA!</h2>
      <p className="marcas-subtitle">Encuentra los mejores smartphones al mejor precio</p>

      <div className="marcas-grid">
        {marcas.map((marca) => (
          <div key={marca.slug} className="marca-card">
            <div className="marca-imagen">
              <img src={marca.logo} alt={marca.nombre} style={{ width: "70%", height: "70%", objectFit: "contain" }} />
            </div>
            <div className="marca-tag">{marca.tag}</div>
            <h3 className="marca-nombre">{marca.nombre}</h3>
            <div className="marca-precio">{marca.precio}</div>
            <Link to={`/catalogo?marca=${marca.slug}`} className="marca-boton">
              Ver Catálogo
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Marcas;