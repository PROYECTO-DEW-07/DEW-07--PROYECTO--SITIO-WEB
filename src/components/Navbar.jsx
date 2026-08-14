import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        CLICK<span style={{ color: "#bfe9fb" }}>CELL</span>
      </Link>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/catalogo" className="navbar-link">Catálogo</Link>
        <Link to="/carrito" className="navbar-link">
          Carrito {totalItems > 0 && `(${totalItems})`}
        </Link>
        <Link to="/login" className="navbar-btn-login">Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar;