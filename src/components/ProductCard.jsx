import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductCard({ producto }) {
  const enStock = producto.stock > 0;
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <Link to={`/producto/${producto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={styles.imgBox}>
          <img src={producto.imagen} alt={producto.nombre} style={styles.img} />
          
        </div>
        

        <div style={styles.info}>
          <h4 style={styles.nombre}>{producto.nombre}</h4>
          <p style={styles.precio}>S/ {producto.precio.toLocaleString("es-PE")}</p>
          <p style={{ ...styles.estado, color: enStock ? "#16a34a" : "#dc2626" }}>
            {enStock ? "✅ En stock" : "❌ Agotado"}
          </p>
          <p style={styles.datos}>{producto.almacenamiento}</p>
        </div>
      </Link>

      <div style={{ padding: "0 20px 18px" }}>
        <button
          disabled={!enStock}
          onClick={() => addToCart(producto)}
          style={enStock ? styles.btn : styles.btnDisabled}
        >
          {enStock ? "Comprar" : "Sin stock"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
  },
  imgBox: {
    background: "#eaf3f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "160px",
  },
  img: {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  padding: "10px",
},
  info: {
    padding: "18px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  nombre: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#0f2d6b",
    margin: 0,
  },
  precio: {
    fontSize: "20px",
    fontWeight: 800,
    color: "#09a0e6",
    margin: 0,
  },
  estado: {
    fontSize: "13px",
    fontWeight: 600,
    margin: 0,
  },
  datos: {
    fontSize: "12px",
    color: "#64748b",
    background: "#f1f5f9",
    padding: "6px 10px",
    borderRadius: "8px",
    margin: 0,
    width: "fit-content",
  },
  btn: {
    marginTop: "auto",
    width: "100%",
    padding: "10px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)",
    color: "white",
    fontWeight: 700,
    fontSize: "13px",
    cursor: "pointer",
  },
  btnDisabled: {
    marginTop: "auto",
    width: "100%",
    padding: "10px",
    borderRadius: "999px",
    border: "none",
    background: "#94a3b8",
    color: "white",
    fontWeight: 700,
    fontSize: "13px",
    cursor: "not-allowed",
  },
};

export default ProductCard;