import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-logo">
        CLICK<span style={{ color: "#bfe9fb" }}>CELL</span>
      </span>

      <span className="footer-copy">© 2026 ClickCell. Todos los derechos reservados.</span>

      <nav className="footer-links">
        <a href="#" className="footer-link">Privacidad</a>
        <a href="#" className="footer-link">Términos</a>
        <a href="#" className="footer-link">Contacto</a>
      </nav>
    </footer>
  );
}

export default Footer;