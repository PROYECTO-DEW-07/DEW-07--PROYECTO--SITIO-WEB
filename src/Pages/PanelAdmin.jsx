import { useState } from "react";
import { useProducts } from "../Context/ProductContext";

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
    const datos = {
      ...form,
      precio: Number(form.precio),
      stock: Number(form.stock),
    };

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
    <div style={styles.page}>
      <h1 style={styles.titulo}>Panel Administrativo — Inventario</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <p style={styles.formTitulo}>{editandoId ? "Editar producto" : "Nuevo producto"}</p>

        <div style={styles.formGrid}>
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" style={styles.input} required />
          <select name="marca" value={form.marca} onChange={handleChange} style={styles.input}>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>Poco</option>
          </select>
          <input name="precio" type="number" value={form.precio} onChange={handleChange} placeholder="Precio" style={styles.input} required />
          <input name="almacenamiento" value={form.almacenamiento} onChange={handleChange} placeholder="Almacenamiento (256GB)" style={styles.input} required />
          <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" style={styles.input} required />
        </div>

        <div style={styles.formBotones}>
          <button type="submit" style={styles.btnGuardar}>
            {editandoId ? "Guardar cambios" : "Agregar producto"}
          </button>
          {editandoId && (
            <button type="button" onClick={handleCancelar} style={styles.btnCancelar}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div style={styles.tablaWrap}>
        <table style={styles.tabla}>
          <thead>
            <tr>
              <th style={styles.th}>Producto</th>
              <th style={styles.th}>Marca</th>
              <th style={styles.th}>Stock</th>
              <th style={styles.th}>Precio</th>
              <th style={styles.th}>Estado</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td style={styles.td}>{p.nombre}</td>
                <td style={styles.td}>{p.marca}</td>
                <td style={styles.td}>{p.stock}</td>
                <td style={styles.td}>S/ {p.precio.toLocaleString("es-PE")}</td>
                <td style={styles.td}>
                  {p.stock > 0 ? (
                    <span style={{ color: "#16a34a", fontWeight: 600 }}>✅ En stock</span>
                  ) : (
                    <span style={{ color: "#dc2626", fontWeight: 600 }}>❌ Agotado</span>
                  )}
                </td>
                <td style={styles.td}>
                  <button onClick={() => handleEditar(p)} style={styles.btnEditar}>✏️</button>
                  <button onClick={() => deleteProduct(p.id)} style={styles.btnEliminar}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "36px 40px", background: "#eaf3f4", minHeight: "480px" },
  titulo: { fontSize: "22px", fontWeight: 800, color: "#0f2d6b", marginBottom: "20px" },
  form: {
    background: "white", borderRadius: "16px", padding: "24px", marginBottom: "24px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0",
  },
  formTitulo: { fontWeight: 700, color: "#0f2d6b", margin: "0 0 14px", fontSize: "15px" },
  formGrid: {
    display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", marginBottom: "14px",
  },
  input: {
    padding: "10px 12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "13px",
  },
  formBotones: { display: "flex", gap: "10px" },
  btnGuardar: {
    padding: "10px 22px", borderRadius: "999px", border: "none",
    background: "linear-gradient(135deg, #09a0e6, #0f2d6b)", color: "white",
    fontWeight: 700, fontSize: "13px", cursor: "pointer",
  },
  btnCancelar: {
    padding: "10px 22px", borderRadius: "999px", border: "1px solid #e2e8f0",
    background: "white", color: "#475569", fontWeight: 700, fontSize: "13px", cursor: "pointer",
  },
  tablaWrap: {
    background: "white", borderRadius: "16px", padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0", overflowX: "auto",
  },
  tabla: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  th: {
    textAlign: "left", padding: "10px 8px", borderBottom: "2px solid #eaf3f4",
    color: "#64748b", fontWeight: 700,
  },
  td: { padding: "10px 8px", borderBottom: "1px solid #f1f5f9", color: "#0f2d6b" },
  btnEditar: { border: "none", background: "none", cursor: "pointer", fontSize: "15px", marginRight: "10px" },
  btnEliminar: { border: "none", background: "none", cursor: "pointer", fontSize: "15px" },
};

export default PanelAdmin;