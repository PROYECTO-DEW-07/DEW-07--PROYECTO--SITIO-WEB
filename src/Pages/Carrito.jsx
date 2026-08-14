import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./Carrito.css";

function Carrito() {
  const { cart, removeFromCart, totalPrecio } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="carrito-vacio">
        <h1 style={{ color: "#0f2d6b" }}>Tu carrito está vacío</h1>
        <Link to="/catalogo" className="carrito-link">Ir al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="carrito-page">
      <h1 className="carrito-titulo">Tu carrito</h1>

      <div className="carrito-grid">
        <div className="carrito-lista">
          {cart.map((item) => (
            <div key={item.id} className="carrito-item">
              <div className="carrito-item-img">
                <img src={item.imagen} alt={item.nombre} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p className="carrito-item-nombre">{item.nombre}</p>
                <p className="carrito-item-cant">Cant: {item.cantidad} · {item.almacenamiento}</p>
              </div>
              <span className="carrito-item-precio">
                S/ {(item.precio * item.cantidad).toLocaleString("es-PE")}
              </span>
              <button onClick={() => removeFromCart(item.id)} className="carrito-trash">
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="carrito-resumen">
          <p className="carrito-resumen-titulo">Resumen</p>
          <div className="carrito-resumen-total">
            <span>Total</span>
            <span>S/ {totalPrecio.toLocaleString("es-PE")}</span>
          </div>
          <button onClick={() => navigate("/checkout")} className="carrito-btn-pagar">
            Ir a pagar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;