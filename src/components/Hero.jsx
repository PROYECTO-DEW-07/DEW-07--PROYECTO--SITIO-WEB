import { useState, useEffect } from "react";
import "./Hero.css";

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
    <section className="hero">
      <h1 className="hero-titulo">{slide.titulo}</h1>

      <div className="hero-content">
        <div className="hero-promo">{slide.promo}</div>

        <div className="hero-phone-box">
          <img
            src={slide.imagen}
            alt={slide.titulo}
            style={{ width: "85%", height: "85%", objectFit: "contain" }}
          />
        </div>

        <div className="hero-precio-box">
          <span>{slide.precioTexto}</span>
          <strong className="hero-precio-strong">{slide.precio}</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;