import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [metodoPago, setMetodoPago] = useState("tarjeta");
  const [error, setError] = useState("");

  if (cart.length === 0) {
    return (
      <div style={{ padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ color: "#0f2d6b" }}>No tienes productos para pagar</h1>
        <Link to="/catalogo" style={{ color: "#09a0e6", fontWeight: 700 }}>Ir al catálogo</Link>
      </div>
    );
  }

  function handleConfirmar(e) {
    e.preventDefault();

    if (!nombre || !direccion || !ciudad) {
      setError("Por favor completa todos los campos de envío.");
      return;
    }

    setError("");
    clearCart();
    navigate("/", { state: { compraExitosa: true } });
  }

  return (
    <div style={styles.page}>
      <p style={styles.paso}>Paso 2 de 3 · Checkout</p>

      <form onSubmit={handleConfirmar} style={styles.grid}>
        <div style={styles.formCard}>
          <p style={styles.sectionTitle}>Datos de envío</p>

          <div style={styles.field}>
            <label style={styles.label}>Nombre completo</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={styles.input}
              placeholder="Tu nombre"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Dirección</label>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              style={styles.input}
              placeholder="Av. Ejemplo 123"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Ciudad</label>
            <input
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              style={styles.input}
              placeholder="Trujillo"
            />
          </div>

          <p style={styles.sectionTitle}>Método de pago</p>
          <div style={styles.metodos}>
            <div
              onClick={() => setMetodoPago("tarjeta")}
              style={metodoPago === "tarjeta" ? styles.metodoActivo : styles.metodo}
            >
              💳 Tarjeta
            </div>
            <div
              onClick={() => setMetodoPago("contraentrega")}
              style={metodoPago === "contraentrega" ? styles.metodoActivo : styles.metodo}
            >
              💵 Contraentrega
            </div>
          </div>

          {error && <p style={styles.error}>{error}</p>}
        </div>

        <div style={styles.resumen}>
          <p style={styles.sectionTitle}>Resumen del pedido</p>
          <div style={styles.resumenRow}>
            <span>{cart.length} producto{cart.length > 1 ? "s" : ""}</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <div style={styles.resumenTotal}>
            <span>Total</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <button type="submit" style={styles.btnConfirmar}>
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  page: { padding: "36px 40px", background: "#eaf3f4", minHeight: "480px" },
  paso: { fontSize: "13px", color: "#64748b", fontWeight: 600, marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 320px", gap: "26px" },
  formCard: {
    background: "white", borderRadius: "16px", padding: "28px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0",
  },
  sectionTitle: { fontWeight: 700, color: "#0f2d6b", margin: "0 0 14px", fontSize: "16px" },
  field: { marginBottom: "14px" },
  label: { display: "block", marginBottom: "6px", fontWeight: 600, color: "#334155", fontSize: "13px" },
  input: {
    width: "100%", height: "42px", borderRadius: "10px", border: "1px solid #d1d5db",
    padding: "0 14px", fontSize: "14px", boxSizing: "border-box",
  },
  metodos: { display: "flex", gap: "14px", marginTop: "8px", marginBottom: "16px" },
  metodo: {
    flex: 1, border: "2px solid #e2e8f0", borderRadius: "12px", padding: "16px",
    textAlign: "center", fontWeight: 700, color: "#475569", cursor: "pointer",
  },
  metodoActivo: {
    flex: 1, border: "2px solid #09a0e6", background: "#eff6ff", borderRadius: "12px",
    padding: "16px", textAlign: "center", fontWeight: 700, color: "#0f2d6b", cursor: "pointer",
  },
  error: { color: "#dc2626", fontSize: "13px", fontWeight: 600, marginTop: "10px" },
  resumen: {
    background: "white", borderRadius: "16px", padding: "24px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", height: "fit-content",
  },
  resumenRow: { display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#64748b", marginBottom: "12px" },
  resumenTotal: {
    display: "flex", justifyContent: "space-between", fontWeight: 800, color: "#0f2d6b",
    fontSize: "17px", borderTop: "1px solid #e2e8f0", paddingTop: "12px", marginBottom: "18px",
  },
  btnConfirmar: {
    width: "100%", padding: "14px", borderRadius: "999px", border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)", color: "white",
    fontWeight: 700, fontSize: "15px", cursor: "pointer",
  },
};

export default Checkout;