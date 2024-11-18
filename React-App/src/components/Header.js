// components/Header.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showLoginPage, showRegisterPage } from '../redux/slices/authSlice';
import '../index.css';

function Header() {
  const isLoginPage = useSelector((state) => state.auth.isLoginPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoginPage) {
      dispatch(showRegisterPage()); // Cambia a la vista de registro
      navigate('/register');
    } else {
      dispatch(showLoginPage()); // Cambia a la vista de login
      navigate('/login');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/'); // Redirige a la página de registro
  };


  return (
    <header className="header">
      <div className="logo">
        <a onClick={handleRegisterRedirect}>SoloGuitar</a> </div>
      <nav className="nav-links">
        <a onClick={() => {navigate('/tutoriales')}} role="link">Tutoriales</a>
        <a onClick={() => {navigate('/comunidad')}} role="link">Comunidad</a>
        <a onClick={() => {navigate('/academias')}} role="link">Academias afiliadas</a>
        <a href="#canciones">Canciones</a>
        <button onClick={handleButtonClick} className="login-button">
          {isLoginPage ? 'Registro' : 'Iniciar sesión'}
        </button>
      </nav>
    </header>
  );
}

export default Header;