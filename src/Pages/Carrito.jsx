import { Link,useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";


function Carrito() {
  const { cart, removeFromCart, totalPrecio } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={styles.vacio}>
        <h1 style={{ color: "#0f2d6b" }}>Tu carrito está vacío</h1>
        <Link to="/catalogo" style={styles.link}>Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.titulo}>Tu carrito</h1>

      <div style={styles.grid}>
        <div style={styles.lista}>
          {cart.map((item) => (
            <div key={item.id} style={styles.item}>
              <div style={styles.itemImg}>📱</div>
              <div style={{ flex: 1 }}>
                <p style={styles.itemNombre}>{item.nombre}</p>
                <p style={styles.itemCant}>Cant: {item.cantidad} · {item.almacenamiento}</p>
              </div>
              <span style={styles.itemPrecio}>
                S/ {(item.precio * item.cantidad).toLocaleString("es-PE")}
              </span>
              <button onClick={() => removeFromCart(item.id)} style={styles.trash}>
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div style={styles.resumen}>
          <p style={styles.resumenTitulo}>Resumen</p>
          <div style={styles.resumenTotal}>
            <span>Total</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <button onClick={() => navigate("/checkout")} style={styles.btnPagar}>Ir a pagar</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  vacio: { padding: "80px 40px", textAlign: "center" },
  link: { color: "#09a0e6", fontWeight: 700, textDecoration: "none" },
  page: { padding: "36px 40px", background: "#eaf3f4", minHeight: "480px" },
  titulo: { fontSize: "26px", fontWeight: 800, color: "#0f2d6b", marginBottom: "22px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 320px", gap: "26px" },
  lista: { display: "flex", flexDirection: "column", gap: "16px" },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "white",
    borderRadius: "16px",
    padding: "16px 20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    border: "1px solid #e2e8f0",
  },
  itemImg: {
    width: "56px",
    height: "56px",
    background: "#eaf3f4",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },
  itemNombre: { fontWeight: 700, color: "#0f2d6b", margin: 0, fontSize: "16px" },
  itemCant: { fontSize: "13px", color: "#64748b", margin: "3px 0 0" },
  itemPrecio: { fontWeight: 800, color: "#09a0e6", fontSize: "17px" },
  trash: { background: "none", border: "none", cursor: "pointer", fontSize: "18px" },
  resumen: {
    background: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    border: "1px solid #e2e8f0",
    height: "fit-content",
  },
  resumenTitulo: { fontWeight: 700, color: "#0f2d6b", margin: "0 0 16px", fontSize: "16px" },
  resumenTotal: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 800,
    color: "#0f2d6b",
    fontSize: "17px",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "12px",
    marginBottom: "18px",
  },
  btnPagar: {
    width: "100%",
    padding: "14px",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)",
    color: "white",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default Carrito;