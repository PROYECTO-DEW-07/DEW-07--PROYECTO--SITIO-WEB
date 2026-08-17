import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProvider, useCart } from "./CartContext";

const producto = { id: 1, nombre: "Equipo", precio: 500 };

function CarritoDePrueba() {
  const { addToCart, decreaseQuantity, totalItems, totalPrecio } = useCart();

  return (
    <>
      <button onClick={() => addToCart(producto)}>Agregar</button>
      <button onClick={() => decreaseQuantity(producto.id)}>
        Quitar unidad
      </button>

      <output>Unidades: {totalItems}</output>
      <output>Total: S/ {totalPrecio}</output>
    </>
  );
}

test("calcula el total y elimina el producto al reducir su cantidad a cero", async () => {
  const usuario = userEvent.setup();

  render(
    <CartProvider>
      <CarritoDePrueba />
    </CartProvider>
  );

  await usuario.click(screen.getByRole("button", { name: "Agregar" }));
  await usuario.click(screen.getByRole("button", { name: "Agregar" }));

  expect(screen.getByText("Unidades: 2")).toBeInTheDocument();
  expect(screen.getByText("Total: S/ 1000")).toBeInTheDocument();

  await usuario.click(screen.getByRole("button", { name: "Quitar unidad" }));
  await usuario.click(screen.getByRole("button", { name: "Quitar unidad" }));

  expect(screen.getByText("Unidades: 0")).toBeInTheDocument();
  expect(screen.getByText("Total: S/ 0")).toBeInTheDocument();
});