import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <section className="contacto-section">
      <div className="contacto-icon">🎧</div>

      <h2 className="contacto-titulo">¿Listo para encontrar tu próximo smartphone?</h2>
      <p className="contacto-texto">
        Únete a más de 100 clientes satisfechos que ya confiaron en ClickCell.
        Nuestro equipo está listo para ayudarte a encontrar el equipo ideal para ti.
      </p>

      <div className="contacto-social-buttons">
        <div
          className="contacto-whatsapp-wrapper"
          onMouseEnter={() => setMenuAbierto(true)}
          onMouseLeave={() => setMenuAbierto(false)}
        >
          <button className="contacto-social-btn" style={{ background: "#25D366" }}>
            💬 WhatsApp
          </button>

          {menuAbierto && (
            <div className="contacto-whatsapp-options">
              <a href="#" className="contacto-option-link">📱 Ventas</a>
              <a href="#" className="contacto-option-link">🛠️ Soporte Técnico</a>
              <a href="#" className="contacto-option-link">📦 Estado de Pedido</a>
            </div>
          )}
        </div>

        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contacto-social-btn" style={{ background: "#1877F2" }}>
          📘 Facebook
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contacto-social-btn" style={{ background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}>
          📷 Instagram
        </a>
      </div>

      <p className="contacto-nota">Atención personalizada de lunes a sábado de 9:00 AM a 8:00 PM.</p>
    </section>
  );
}

export default Contacto;