const stats = [
  { numero: "+100", nombre: "Equipos vendidos" },
  { numero: "94%", nombre: "Satisfacción de clientes" },
  { numero: "+4", nombre: "Años de experiencia" },
  { numero: "$", nombre: "Precios competitivos" },
];

function Estadisticas() {
  return (
    <div style={styles.grid}>
      {stats.map((stat, i) => (
        <div key={i} style={styles.card}>
          <div style={styles.numero}>{stat.numero}</div>
          <div style={styles.nombre}>{stat.nombre}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
    padding: "40px 48px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    border: "2px solid #1D4ED8",
    borderRadius: "200px",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "160px",
  },
  numero: {
    fontSize: "30px",
    fontWeight: 800,
    color: "#0EA5E9",
  },
  nombre: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#475569",
  },
};

export default Estadisticas;
