import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import productos from "./data/productos";
import Hero from "./components/Hero";
import Estadisticas from "./components/Estadisticas";
import Marcas from "./components/Marcas";
import Contacto from "./components/Contacto";
import Catalogo from "./Pages/Catalogo";
import Carrito from "./Pages/Carrito";
import DetalleProducto from "./Pages/DetalleProducto";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import PanelAdmin from "./Pages/PanelAdmin";

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
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/admin" element={<PanelAdmin />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;