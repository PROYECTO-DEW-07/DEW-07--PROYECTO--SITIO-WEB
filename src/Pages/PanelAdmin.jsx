import { useState } from "react";
import { useProducts } from "../Context/ProductContext";
import "./PanelAdmin.css";

const vacio = { nombre: "", marca: "Apple", precio: "", almacenamiento: "", stock: "" };

function PanelAdmin() {
  const { productos, addProduct, updateProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState(vacio);
  const [editandoId, setEditandoId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const datos = { ...form, precio: Number(form.precio), stock: Number(form.stock) };
    if (editandoId) {
      updateProduct(editandoId, datos);
      setEditandoId(null);
    } else {
      addProduct(datos);
    }
    setForm(vacio);
  }

  function handleEditar(producto) {
    setEditandoId(producto.id);
    setForm({
      nombre: producto.nombre,
      marca: producto.marca,
      precio: producto.precio,
      almacenamiento: producto.almacenamiento,
      stock: producto.stock,
    });
  }

  function handleCancelar() {
    setEditandoId(null);
    setForm(vacio);
  }

  return (
    <div className="admin-page">
      <h1 className="admin-titulo">Panel Administrativo — Inventario</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <p className="admin-form-titulo">{editandoId ? "Editar producto" : "Nuevo producto"}</p>

        <div className="admin-form-grid">
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="admin-input" required />
          <select name="marca" value={form.marca} onChange={handleChange} className="admin-input">
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>Poco</option>
            <option>Motorola</option>
          </select>
          <input name="precio" type="number" value={form.precio} onChange={handleChange} placeholder="Precio" className="admin-input" required />
          <input name="almacenamiento" value={form.almacenamiento} onChange={handleChange} placeholder="Almacenamiento" className="admin-input" required />
          <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" className="admin-input" required />
        </div>

        <div className="admin-form-botones">
          <button type="submit" className="admin-btn-guardar">
            {editandoId ? "Guardar cambios" : "Agregar producto"}
          </button>
          {editandoId && (
            <button type="button" onClick={handleCancelar} className="admin-btn-cancelar">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="admin-tabla-wrap">
        <table className="admin-tabla">
          <thead>
            <tr>
              <th className="admin-th">Producto</th>
              <th className="admin-th">Marca</th>
              <th className="admin-th">Stock</th>
              <th className="admin-th">Precio</th>
              <th className="admin-th">Estado</th>
              <th className="admin-th">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td className="admin-td">{p.nombre}</td>
                <td className="admin-td">{p.marca}</td>
                <td className="admin-td">{p.stock}</td>
                <td className="admin-td">S/ {p.precio.toLocaleString("es-PE")}</td>
                <td className="admin-td">
                  {p.stock > 0 ? (
                    <span style={{ color: "#16a34a", fontWeight: 600 }}>✅ En stock</span>
                  ) : (
                    <span style={{ color: "#dc2626", fontWeight: 600 }}>❌ Agotado</span>
                  )}
                </td>
                <td className="admin-td">
                  <button onClick={() => handleEditar(p)} className="admin-btn-editar">✏️</button>
                  <button onClick={() => deleteProduct(p.id)} className="admin-btn-eliminar">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PanelAdmin;