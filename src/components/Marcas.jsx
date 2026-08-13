import { Link } from "react-router-dom";

const marcas = [
  { nombre: "Apple", tag: "🔥 Más vendida", precio: "Desde S/ 999", slug: "apple", logo: "/productos/apple-logo1.png" },
  { nombre: "Samsung", tag: "⭐ Recomendado", precio: "Desde S/ 699", slug: "samsung", logo: "/productos/samsung1-logo.png" },
  { nombre: "Xiaomi", tag: "💰 Mejor precio", precio: "Desde S/ 399", slug: "xiaomi", logo: "/productos/xiaomi-logo.png" },
  { nombre: "Poco", tag: "⚡ Máxima potencia", precio: "Desde S/ 449", slug: "poco", logo: "/productos/poco-logo.png" },
  { nombre: "Motorola", tag: "🎯 Buena relación calidad-precio", precio: "Desde S/ 349", slug: "motorola", logo: "/productos/motorola-logo.webp" },
];

function Marcas() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>¡ELIGE TU MARCA FAVORITA!</h2>
      <p style={styles.subtitle}>Encuentra los mejores smartphones al mejor precio</p>

      <div style={styles.grid}>
        {marcas.map((marca) => (
          <div key={marca.slug} style={styles.card}>
          <div style={styles.imagen}>
        <img src={marca.logo} alt={marca.nombre} style={{ width: "70%", height: "70%", objectFit: "contain" }} />
</div>

            <div style={styles.tag}>{marca.tag}</div>

            <h3 style={styles.nombre}>{marca.nombre}</h3>

            <div style={styles.precio}>{marca.precio}</div>

            <Link to={`/catalogo?marca=${marca.slug}`} style={styles.boton}>
              Ver Catálogo
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "50px 50px",
    backgroundColor: "#eaf3f4",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.5rem",
    color: "#0f2d6b",
    fontWeight: 800,
    margin: 0,
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    color: "#64748b",
    margin: "10px",
    fontSize: "1.2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "24px",
    margin: "30px",
  },
  card: {
    background: "white",
    borderRadius: "30px",
    padding: "35px 25px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },
  imagen: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    margin: "0 auto 25px",
    background: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    display: "inline-block",
    background: "#dbeafe",
    color: "#0f2d6b",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "15px",
  },
  nombre: {
    color: "#0f2d6b",
    fontSize: "24px",
    fontWeight: 700,
    margin: "10px 0",
  },
  precio: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#09a0e6",
    margin: "10px 0 20px",
  },
  boton: {
    display: "block",
    width: "100%",
    padding: "12px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)",
    color: "white",
    fontWeight: 600,
    textDecoration: "none",
    boxSizing: "border-box",
  },
};

export default Marcas;