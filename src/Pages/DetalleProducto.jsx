import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/CartContext";
import "./DetalleProducto.css";

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
    <div className="detalle-page">
      <p className="detalle-breadcrumb">
        <Link to="/catalogo" style={{ color: "#64748b", textDecoration: "none" }}>Catálogo</Link>
        {" > "}{producto.marca}{" > "}Detalle
      </p>

      <div className="detalle-card">
        <div className="detalle-img-box">
          <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px" }} />
        </div>

        <div>
          <h1 className="detalle-nombre">{producto.nombre}</h1>
          <p className="detalle-precio">S/ {producto.precio.toLocaleString("es-PE")}</p>
          <p className="detalle-estado" style={{ color: enStock ? "#16a34a" : "#dc2626" }}>
            {enStock ? "✅ En stock" : "❌ Agotado"}
          </p>

          <div className="detalle-datos">{producto.almacenamiento}</div>

          <div className="detalle-cantidad-row">
            <span style={{ fontWeight: 600, color: "#475569" }}>Cantidad</span>
            <div className="detalle-cantidad-controls">
              <button onClick={() => setCantidad((c) => Math.max(1, c - 1))} className="detalle-cantidad-btn">−</button>
              <span className="detalle-cantidad-num">{cantidad}</span>
              <button onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))} className="detalle-cantidad-btn">+</button>
            </div>
          </div>

          <button disabled={!enStock} onClick={handleAgregar} className={enStock ? "detalle-btn-comprar" : "detalle-btn-disabled"}>
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;