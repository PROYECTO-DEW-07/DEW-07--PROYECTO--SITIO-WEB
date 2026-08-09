import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import productos from "./data/productos";
import Hero from "./components/Hero";
import Estadisticas from "./components/Estadisticas";
import Marcas from "./components/Marcas";
import Contacto from "./components/Contacto";
import Catalogo from "./pages/Catalogo";
import Carrito from "./pages/Carrito";
import DetalleProducto from "./pages/DetalleProducto";

function Home() {
  return (
    <div>
      <Hero />
      <Estadisticas />
      <Marcas />
      <Contacto />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;