function Footer() {
  return (
    <footer style={styles.footer}>
      <span style={styles.logo}>
        CLICK<span style={{ color: "#bfe9fb" }}>CELL</span>
      </span>

      <span style={styles.copy}>© 2026 ClickCell. Todos los derechos reservados.</span>

      <nav style={styles.links}>
        <a href="#" style={styles.link}>Privacidad</a>
        <a href="#" style={styles.link}>Términos</a>
        <a href="#" style={styles.link}>Contacto</a>
      </nav>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(135deg, #0f2d6b, #09a0e6)",
    color: "white",
    fontWeight: "bold",
    padding: "20px 80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  logo: {
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "1px",
  },
  copy: {
    fontSize: "14px",
    color: "#cbd5e1",
    fontWeight: 400,
  },
  links: {
    display: "flex",
    gap: "50px",
  },
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 400,
  },
};

export default Footer;