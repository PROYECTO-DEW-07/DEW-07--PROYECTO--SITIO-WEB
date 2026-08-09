import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        CLICK<span style={{ color: "#bfe9fb" }}>CELL</span>
      </Link>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/catalogo" style={styles.link}>Catálogo</Link>
        <Link to="/carrito" style={styles.link}>Carrito</Link>
        <Link to="/login" style={styles.btnLogin}>Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "linear-gradient(135deg, #0f2d6b, #09a0e6)",
  },
  logo: {
    fontWeight: 800,
    color: "white",
    fontSize: "22px",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },
  link: {
    color: "white",
    fontWeight: 700,
    fontSize: "15px",
    textDecoration: "none",
  },
  btnLogin: {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.4)",
    color: "white",
    borderRadius: "8px",
    padding: "8px 18px",
    fontWeight: 600,
    fontSize: "13px",
    textDecoration: "none",
  },
};

export default Navbar;