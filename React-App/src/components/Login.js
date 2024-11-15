// components/Login.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showLoginPage } from '../redux/slices/authSlice';
import '../Styles/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoginPage()); // Establece el estado en página de login
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    console.log("Iniciando sesión...");
  };

  return (
    <div className="content">
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Introduce tu correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
      <p className="register-link">
        ¿No tienes cuenta? <a href={navigate('/register')}>Regístrate</a>
      </p>
    </div>
    </div>
  );
}

export default Login;
