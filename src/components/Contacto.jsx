import { useState } from "react";

function Contacto() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <section style={styles.section}>
      <div style={styles.icon}>🎧</div>

      <h2 style={styles.titulo}>¿Listo para encontrar tu próximo smartphone?</h2>
      <p style={styles.texto}>
        Únete a más de 100 clientes satisfechos que ya confiaron en ClickCell.
        Nuestro equipo está listo para ayudarte a encontrar el equipo ideal para ti.
      </p>

      <div style={styles.socialButtons}>
        <div
          style={styles.whatsappWrapper}
          onMouseEnter={() => setMenuAbierto(true)}
          onMouseLeave={() => setMenuAbierto(false)}
        >
          <button style={{ ...styles.socialBtn, background: "#25D366" }}>
            💬 WhatsApp
          </button>

          {menuAbierto && (
            <div style={styles.whatsappOptions}>
              <a href="#" style={styles.optionLink}>📱 Ventas</a>
              <a href="#" style={styles.optionLink}>🛠️ Soporte Técnico</a>
              <a href="#" style={styles.optionLink}>📦 Estado de Pedido</a>
            </div>
          )}
        </div>

        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ ...styles.socialBtn, background: "#1877F2" }}>
          📘 Facebook
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ ...styles.socialBtn, background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}>
          📷 Instagram
        </a>
      </div>

      <p style={styles.nota}>Atención personalizada de lunes a sábado de 9:00 AM a 8:00 PM.</p>
    </section>
  );
}

const styles = {
  section: {
    background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
    color: "white",
    textAlign: "center",
    padding: "50px 20px",
  },
  icon: {
    fontSize: "48px",
    marginBottom: "10px",
  },
  titulo: {
    fontSize: "36px",
    fontWeight: 800,
    margin: "10px",
  },
  texto: {
    maxWidth: "700px",
    margin: "20px auto",
    fontSize: "17px",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
    margin: "20px",
  },
  whatsappWrapper: {
    position: "relative",
  },
  socialBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 28px",
    borderRadius: "999px",
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
  },
  whatsappOptions: {
    position: "absolute",
    top: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    minWidth: "220px",
    overflow: "hidden",
    zIndex: 10,
  },
  optionLink: {
    display: "block",
    padding: "14px",
    textDecoration: "none",
    color: "#333",
  },
  nota: {
    fontSize: "16px",
    opacity: 0.9,
    marginTop: "10px",
  },
};

export default Contacto;