import "./Beneficios.css";

const beneficios = [
  {
    icono: "🚚",
    titulo: "Envío rápido",
    descripcion: "Recibe tu equipo de forma segura y sin complicaciones.",
  },
  {
    icono: "🛡️",
    titulo: "Garantía incluida",
    descripcion: "Todos nuestros equipos cuentan con garantía.",
  },
  {
    icono: "🔒",
    titulo: "Pago seguro",
    descripcion: "Compra con tranquilidad mediante métodos confiables.",
  },
  {
    icono: "💬",
    titulo: "Asesoría personalizada",
    descripcion: "Te ayudamos a elegir el celular ideal para ti.",
  },
];

function Beneficios() {
  return (
    <section className="beneficios">
      <div className="beneficios-contenido">
        <p className="beneficios-etiqueta">COMPRA CON CONFIANZA</p>
        <h2>¿Por qué elegir ClickCell?</h2>

        <div className="beneficios-grid">
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className="beneficio-card">
              <span className="beneficio-icono">{beneficio.icono}</span>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;