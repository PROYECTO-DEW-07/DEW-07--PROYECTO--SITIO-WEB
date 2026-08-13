import { useState, useEffect } from "react";

const slides = [
  {
    titulo: "iPhone 17 Pro",
    promo: "¡Nuevo ingreso!",
    precioTexto: "Disponible desde:",
    precio: "S/ 4,500",
    imagen: "/productos/iphone17pro.png",
  },
  {
    titulo: "Galaxy S25 Ultra",
    promo: "¡Oferta limitada!",
    precioTexto: "Consíguelo desde:",
    precio: "S/ 4,200",
    imagen: "/productos/s25ultra.png",
  },
  {
    titulo: "Xiaomi 14 Ultra",
    promo: "¡Máxima potencia!",
    precioTexto: "Smartphones desde:",
    precio: "S/ 3,200",
    imagen: "/productos/xiaomi.jpeg",
  },
];


function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section style={styles.hero}>
      <h1 style={styles.titulo}>{slide.titulo}</h1>

      <div style={styles.content}>
        <div style={styles.promo}>{slide.promo}</div>

       <div style={styles.phoneBox}>
  <img src={slide.imagen} alt={slide.titulo} style={{ width: "85%", height: "85%", objectFit: "contain" }} />
</div>

        <div style={styles.precioBox}>
          <span>{slide.precioTexto}</span>
          <strong style={styles.precioStrong}>{slide.precio}</strong>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: "#eaf3f4",
    textAlign: "center",
    padding: "40px 40px",
    position: "relative",
  },
  titulo: {
    color: "#0f2d6b",
    fontSize: "48px",
    margin: "20px 0",
  },
  content: {
    position: "relative",
    width: "fit-content",
    margin: "0 auto 20px",
  },
  promo: {
    display: "inline-block",
    fontSize: "20px",
    background: "#2d6ea1",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  phoneBox: {
    width: "300px",
    height: "300px",
    background: "white",
    borderRadius: "20px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  precioBox: {
    fontSize: "32px",
    color: "white",
    width: "500px",
    maxWidth: "90vw",
    height: "100px",
    background: "#123f8b",
    borderRadius: "25px",
    margin: "-30px auto 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    position: "relative",
  },
  precioStrong: {
    background: "#4cc7d4",
    padding: "12px 30px",
    borderRadius: "50px",
    fontSize: "2rem",
    color: "#0f2d6b",
    minWidth: "180px",
    whiteSpace: "nowrap",
  },
};

export default Hero;