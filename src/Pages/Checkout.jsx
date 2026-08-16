import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useProducts } from "../Context/ProductContext";
import "./Checkout.css";

function Checkout() {
  const { cart, totalPrecio, clearCart } = useCart();
  const { updateProduct } = useProducts();
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

  cart.forEach((item) => {
    const nuevoStock = Math.max(
      0,
      item.stock - item.cantidad
    );

    updateProduct(item.id, {
      stock: nuevoStock,
    });
  });

  clearCart();

  navigate("/", {
    state: {
      compraExitosa: true,
    },
  });
}
  return (
    <div className="checkout-page">
      <p className="checkout-paso">Paso 2 de 3 · Checkout</p>

      <form onSubmit={handleConfirmar} className="checkout-grid">
        <div className="checkout-form-card">
          <p className="checkout-section-title">Datos de envío</p>

          <div className="checkout-field">
            <label className="checkout-label">Nombre completo</label>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="checkout-input" placeholder="Tu nombre" />
          </div>

          <div className="checkout-field">
            <label className="checkout-label">Dirección</label>
            <input value={direccion} onChange={(e) => setDireccion(e.target.value)} className="checkout-input" placeholder="Av. Ejemplo 123" />
          </div>

          <div className="checkout-field">
            <label className="checkout-label">Ciudad</label>
            <input value={ciudad} onChange={(e) => setCiudad(e.target.value)} className="checkout-input" placeholder="Trujillo" />
          </div>

          <p className="checkout-section-title">Método de pago</p>
          <div className="checkout-metodos">
            <div onClick={() => setMetodoPago("tarjeta")} className={metodoPago === "tarjeta" ? "checkout-metodo-activo" : "checkout-metodo"}>
              💳 Tarjeta
            </div>
            <div onClick={() => setMetodoPago("contraentrega")} className={metodoPago === "contraentrega" ? "checkout-metodo-activo" : "checkout-metodo"}>
              💵 Contraentrega
            </div>
          </div>

          {error && <p className="checkout-error">{error}</p>}
        </div>

        <div className="checkout-resumen">
          <p className="checkout-section-title">Resumen del pedido</p>
          <div className="checkout-resumen-row">
            <span>{cart.length} producto{cart.length > 1 ? "s" : ""}</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <div className="checkout-resumen-total">
            <span>Total</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <button type="submit" className="checkout-btn-confirmar">
            Confirmar compra
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;