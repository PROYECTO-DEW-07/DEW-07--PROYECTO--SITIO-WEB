import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    id: 1,
    titulo: "iPhone 17 Pro",
    promo: "¡Nuevo ingreso!",
    descripcion: "Diseño premium, rendimiento excepcional y una cámara lista para cada momento.",
    precioTexto: "Disponible desde",
    precio: "S/ 4,500",
    imagen: "/productos/iphone17pro.png",
  },
  {
    id: 11,
    titulo: "Galaxy S25 Ultra",
    promo: "¡Oferta limitada!",
    descripcion: "Potencia profesional, pantalla increíble y cámara de alta resolución.",
    precioTexto: "Consíguelo desde",
    precio: "S/ 4,200",
    imagen: "/productos/s25ultra.png",
  },
  {
    id: 21,
    titulo: "Xiaomi 14 Ultra",
    promo: "¡Máxima potencia!",
    descripcion: "Tecnología avanzada, gran rendimiento y fotografía de nivel profesional.",
    precioTexto: "Smartphones desde",
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
      <div className="hero-inner">
        <div className="hero-info">
          <p className="hero-promo">{slide.promo}</p>

          <h1 className="hero-titulo">{slide.titulo}</h1>

          <p className="hero-descripcion">{slide.descripcion}</p>

          <div className="hero-precio-box">
            <span>{slide.precioTexto}</span>
            <strong className="hero-precio-strong">{slide.precio}</strong>
          </div>

          <div className="hero-botones">
            <Link to={`/producto/${slide.id}`} className="hero-btn-principal">
              Ver producto
            </Link>

            <Link to="/catalogo" className="hero-btn-secundario">
              Ver catálogo
            </Link>
          </div>

          <div className="hero-beneficios">
            <span>🚚 Envío rápido</span>
            <span>🛡️ Garantía incluida</span>
            <span>🔒 Pago seguro</span>
          </div>
        </div>

        <div className="hero-imagen-area">
          <div className="hero-circulo"></div>

          <div className="hero-phone-box">
            <img
              src={slide.imagen}
              alt={slide.titulo}
              className="hero-imagen"
            />
          </div>
        </div>
      </div>

      <div className="hero-puntos">
        {slides.map((item, posicion) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Mostrar ${item.titulo}`}
            className={posicion === index ? "hero-punto activo" : "hero-punto"}
            onClick={() => setIndex(posicion)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;