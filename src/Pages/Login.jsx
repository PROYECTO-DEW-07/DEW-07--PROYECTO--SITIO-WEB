import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!correo || !password) {
      setError("Por favor completa correo y contraseña.");
      return;
    }

    if (!correo.includes("@")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setError("");
    // Autenticación simulada: no hay backend real, solo validamos el formulario
    navigate("/");
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.logo}>
          CLICK<span style={{ color: "#09a0e6" }}>CELL</span>
        </div>

        <h2 style={styles.titulo}>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={styles.input}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="********"
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.btnLogin}>
            Ingresar
          </button>
        </form>

        <Link to="/" style={styles.volver}>
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, sans-serif",
    background: "linear-gradient(135deg, #0f2d6b, #09a0e6)",
    padding: "40px 20px",
  },
  container: {
    width: "400px",
    maxWidth: "100%",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.20)",
    boxSizing: "border-box",
  },
  logo: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 800,
    color: "#0f2d6b",
    marginBottom: "30px",
  },
  titulo: {
    textAlign: "center",
    color: "#0f2d6b",
    marginBottom: "25px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: 600,
    color: "#334155",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  error: {
    color: "#dc2626",
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "16px",
  },
  btnLogin: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #0f2d6b, #09a0e6)",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
  volver: {
    display: "block",
    textAlign: "center",
    marginTop: "20px",
    textDecoration: "none",
    color: "#0f2d6b",
    fontWeight: 600,
  },
};

export default Login;