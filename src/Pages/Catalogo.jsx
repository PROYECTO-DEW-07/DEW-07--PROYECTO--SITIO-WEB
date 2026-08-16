import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import ProductCard from "../components/ProductCard";
import "./Catalogo.css";

const marcas = ["Todos", "Apple", "Samsung", "Xiaomi", "Poco", "Motorola"];

const precios = [
  { label: "Todos", value: "todos" },
  { label: "Menos de S/1000", value: "0-999" },
  { label: "S/1000 - S/2000", value: "1000-2000" },
  { label: "S/2000 - S/3000", value: "2000-3000" },
  { label: "Más de S/3000", value: "3001+" },
];

const almacenamientos = ["Todos", "64GB", "128GB", "256GB", "512GB"];

function Catalogo() {
  const { productos } = useProducts();
  const [searchParams] = useSearchParams();

  const marcaDesdeUrl = searchParams.get("marca");

  const marcaInicial = marcaDesdeUrl
    ? marcaDesdeUrl.charAt(0).toUpperCase() + marcaDesdeUrl.slice(1)
    : "Todos";

  const [filtroMarca, setFiltroMarca] = useState(marcaInicial);
  const [filtroPrecio, setFiltroPrecio] = useState("todos");
  const [filtroAlmacenamiento, setFiltroAlmacenamiento] = useState("Todos");

  const productosFiltrados = productos.filter((producto) => {
    // FILTRO POR MARCA
    const coincideMarca =
      filtroMarca === "Todos" || producto.marca === filtroMarca;

    // FILTRO POR PRECIO
    let coincidePrecio = true;

    if (filtroPrecio === "0-999") {
      coincidePrecio = producto.precio < 1000;
    }

    if (filtroPrecio === "1000-2000") {
      coincidePrecio = producto.precio >= 1000 && producto.precio <= 2000;
    }

    if (filtroPrecio === "2000-3000") {
      coincidePrecio = producto.precio > 2000 && producto.precio <= 3000;
    }

    if (filtroPrecio === "3001+") {
      coincidePrecio = producto.precio > 3000;
    }

    // FILTRO POR ALMACENAMIENTO
    const coincideAlmacenamiento =
      filtroAlmacenamiento === "Todos" ||
      producto.almacenamiento.startsWith(filtroAlmacenamiento);

    return coincideMarca && coincidePrecio && coincideAlmacenamiento;
  });

  function limpiarFiltros() {
    setFiltroMarca("Todos");
    setFiltroPrecio("todos");
    setFiltroAlmacenamiento("Todos");
  }

  return (
    <div>
      <div className="catalogo-hero">
        <h1 className="catalogo-hero-title">Catálogo de Equipos</h1>
        <p className="catalogo-hero-subtitle">
          Encuentra el smartphone ideal para ti
        </p>
      </div>

      <div className="catalogo-filtros">
        <div className="filtro-grupo">
          <h3>Marca</h3>

          <div className="filtro-opciones">
            {marcas.map((marca) => (
              <button
                key={marca}
                onClick={() => setFiltroMarca(marca)}
                className={
                  filtroMarca === marca
                    ? "filtro-btn-activo"
                    : "filtro-btn"
                }
              >
                {marca}
              </button>
            ))}
          </div>
        </div>

        <div className="filtro-grupo">
          <h3>Precio</h3>

          <div className="filtro-opciones">
            {precios.map((precio) => (
              <button
                key={precio.value}
                onClick={() => setFiltroPrecio(precio.value)}
                className={
                  filtroPrecio === precio.value
                    ? "filtro-btn-activo"
                    : "filtro-btn"
                }
              >
                {precio.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filtro-grupo">
          <h3>Almacenamiento</h3>

          <div className="filtro-opciones">
            {almacenamientos.map((almacenamiento) => (
              <button
                key={almacenamiento}
                onClick={() =>
                  setFiltroAlmacenamiento(almacenamiento)
                }
                className={
                  filtroAlmacenamiento === almacenamiento
                    ? "filtro-btn-activo"
                    : "filtro-btn"
                }
              >
                {almacenamiento}
              </button>
            ))}
          </div>
        </div>

        <button className="limpiar-filtros" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <div className="catalogo-main">
        <p className="resultado-filtros">
          {productosFiltrados.length} producto
          {productosFiltrados.length !== 1 ? "s" : ""} encontrado
          {productosFiltrados.length !== 1 ? "s" : ""}
        </p>

        {productosFiltrados.length === 0 ? (
          <div className="sin-resultados">
            <h2>No encontramos productos</h2>
            <p>
              Prueba cambiando alguno de los filtros seleccionados.
            </p>

            <button onClick={limpiarFiltros}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="catalogo-grid">
            {productosFiltrados.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalogo;