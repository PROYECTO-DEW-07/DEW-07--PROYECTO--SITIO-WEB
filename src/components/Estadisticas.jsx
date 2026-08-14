import "./Estadisticas.css";

const stats = [
  { numero: "+100", nombre: "Equipos vendidos" },
  { numero: "94%", nombre: "Satisfacción de clientes" },
  { numero: "+4", nombre: "Años de experiencia" },
  { numero: "$", nombre: "Precios competitivos" },
];

function Estadisticas() {
  return (
    <div className="estadisticas-grid">
      {stats.map((stat, i) => (
        <div key={i} className="estadisticas-card">
          <div className="estadisticas-numero">{stat.numero}</div>
          <div className="estadisticas-nombre">{stat.nombre}</div>
        </div>
      ))}
    </div>
  );
}

export default Estadisticas;