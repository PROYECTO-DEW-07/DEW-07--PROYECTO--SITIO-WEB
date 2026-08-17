import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../Context/CartContext";
import ProductCard from "./ProductCard";

const productoDisponible = {
  id: 1,
  nombre: "iPhone de prueba",
  marca: "Apple",
  precio: 1200,
  almacenamiento: "128GB",
  stock: 2,
  imagen: "/productos/iphone13.png",
};

function renderizarProducto(producto) {
  return render(
    <MemoryRouter>
      <CartProvider>
        <ProductCard producto={producto} />
      </CartProvider>
    </MemoryRouter>
  );
}

test("agrega el producto al carrito hasta alcanzar el stock", async () => {
  const usuario = userEvent.setup();
  renderizarProducto(productoDisponible);

  const botonComprar = screen.getByRole("button", { name: "Comprar" });

  await usuario.click(botonComprar);
  await usuario.click(botonComprar);

  expect(
    screen.getByRole("button", { name: "Sin stock" })
  ).toBeDisabled();
});

test("deshabilita la compra de un producto agotado", () => {
  renderizarProducto({ ...productoDisponible, stock: 0 });

  expect(
    screen.getByRole("button", { name: "Sin stock" })
  ).toBeDisabled();

  expect(screen.getByText("❌ Agotado")).toBeInTheDocument();
});