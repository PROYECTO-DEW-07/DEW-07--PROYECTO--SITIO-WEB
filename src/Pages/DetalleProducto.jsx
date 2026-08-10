import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";

function DetalleProducto() {
  const { id } = useParams();
  const { productos } = useProducts();
  const producto = productos.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h1 style={{ color: "#0f2d6b" }}>Producto no encontrado</h1>
        <Link to="/catalogo" style={{ color: "#09a0e6" }}>Volver al catálogo</Link>
      </div>
    );
  }

  const enStock = producto.stock > 0;

  function handleAgregar() {
    for (let i = 0; i < cantidad; i++) {
      addToCart(producto);
    }
  }

  return (
    <div style={styles.page}>
      <p style={styles.breadcrumb}>
        <Link to="/catalogo" style={{ color: "#64748b", textDecoration: "none" }}>Catálogo</Link>
        {" > "}{producto.marca} {" > "}Detalle
      </p>

      <div style={styles.card}>
        <div style={styles.imgBox}>
          <span style={{ fontSize: "80px" }}>📱</span>
        </div>

        <div>
          <h1 style={styles.nombre}>{producto.nombre}</h1>
          <p style={styles.precio}>S/ {producto.precio.toLocaleString("es-PE")}</p>
          <p style={{ ...styles.estado, color: enStock ? "#16a34a" : "#dc2626" }}>
            {enStock ? "✅ En stock" : "❌ Agotado"}
          </p>

          <div style={styles.datos}>{producto.almacenamiento}</div>

          <div style={styles.cantidadRow}>
            <span style={{ fontWeight: 600, color: "#475569" }}>Cantidad</span>
            <div style={styles.cantidadControls}>
              <button onClick={() => setCantidad((c) => Math.max(1, c - 1))} style={styles.cantidadBtn}>−</button>
              <span style={styles.cantidadNum}>{cantidad}</span>
              <button onClick={() => setCantidad((c) => c + 1)} style={styles.cantidadBtn}>+</button>
            </div>
          </div>

          <button
            disabled={!enStock}
            onClick={handleAgregar}
            style={enStock ? styles.btnComprar : styles.btnDisabled}
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "36px 40px", background: "#eaf3f4", minHeight: "480px" },
  breadcrumb: { fontSize: "13px", color: "#64748b", marginBottom: "20px" },
  card: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "28px",
    background: "white",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    border: "1px solid #e2e8f0",
  },
  imgBox: {
    background: "#eaf3f4",
    borderRadius: "16px",
    height: "240px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nombre: { fontSize: "24px", fontWeight: 800, color: "#0f2d6b", margin: "0 0 6px" },
  precio: { fontSize: "26px", fontWeight: 800, color: "#09a0e6", margin: "0 0 8px" },
  estado: { fontSize: "13px", fontWeight: 600, margin: "0 0 16px" },
  datos: {
    background: "#f1f5f9",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#475569",
    marginBottom: "20px",
    display: "inline-block",
  },
  cantidadRow: { display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" },
  cantidadControls: { display: "flex", alignItems: "center", gap: "10px" },
  cantidadBtn: {
    width: "32px", height: "32px", borderRadius: "8px", border: "2px solid #e2e8f0",
    background: "white", fontWeight: 700, fontSize: "16px", cursor: "pointer", color: "#0f2d6b",
  },
  cantidadNum: { fontWeight: 700, color: "#0f2d6b", minWidth: "20px", textAlign: "center" },
  btnComprar: {
    padding: "14px 32px", borderRadius: "999px", border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)",
    color: "white", fontWeight: 700, fontSize: "15px", cursor: "pointer",
  },
  btnDisabled: {
    padding: "14px 32px", borderRadius: "999px", border: "none",
    background: "#94a3b8", color: "white", fontWeight: 700, fontSize: "15px", cursor: "not-allowed",
  },
};

export default DetalleProducto;