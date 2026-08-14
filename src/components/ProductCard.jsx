import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./ProductCard.css";

function ProductCard({ producto }) {
  const enStock = producto.stock > 0;
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/producto/${producto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="product-img-box">
          <img src={producto.imagen} alt={producto.nombre} className="product-img" />
        </div>

        <div className="product-info">
          <h4 className="product-nombre">{producto.nombre}</h4>
          <p className="product-precio">S/ {producto.precio.toLocaleString("es-PE")}</p>
          <p className="product-estado" style={{ color: enStock ? "#16a34a" : "#dc2626" }}>
            {enStock ? "✅ En stock" : "❌ Agotado"}
          </p>
          <p className="product-datos">{producto.almacenamiento}</p>
        </div>
      </Link>

      <div className="product-btn-wrap">
        <button
          disabled={!enStock}
          onClick={() => addToCart(producto)}
          className={enStock ? "product-btn" : "product-btn-disabled"}
        >
          {enStock ? "Comprar" : "Sin stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;