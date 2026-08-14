import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

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
    navigate("/");
  }

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-logo">
          CLICK<span style={{ color: "#09a0e6" }}>CELL</span>
        </div>

        <h2 className="login-titulo">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label className="login-label">Correo electrónico</label>
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="login-input" placeholder="ejemplo@correo.com" />
          </div>

          <div className="login-input-group">
            <label className="login-label">Contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" placeholder="********" />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">Ingresar</button>
        </form>

        <Link to="/" className="login-volver">← Volver al inicio</Link>
      </div>
    </div>
  );
}

export default Login;