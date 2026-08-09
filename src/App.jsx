import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import productos from "./data/productos";
import Hero from "./components/Hero";

function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

function Catalogo() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#0f2d6b" }}>Catálogo</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>{p.nombre} — {p.marca} — S/ {p.precio}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;