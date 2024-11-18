// components/MainContent.js
import React from 'react';
import '../Styles/main.css';
import { useNavigate } from 'react-router-dom';

function MainContent() {

  const navigate = useNavigate();
  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige a la página de registro
  };

  return (
    <main className="main-content">
      <div className="left-section">
        <h1>Aprende a tocar guitarra con el método más fácil, simple y efectivo</h1>
        <p>En poco tiempo estarás tocando tus canciones favoritas con las mejores clases de guitarra online</p>
        <button onClick={handleRegisterRedirect} className="login-button">Regístrate
        </button>
        <button className="materials-button">Materiales de aprendizaje</button>
      </div>
      <div className="right-section">
        <img src="image1.png" alt="Video Placeholder" className="video-placeholder" />
      </div>
    </main>
  );
}

export default MainContent;
