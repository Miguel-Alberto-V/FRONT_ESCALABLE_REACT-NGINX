// components/MainContent.js
import React from 'react';
import '../Styles/main.css';

function MainContent() {
  return (
    <main className="main-content">
      <div className="left-section">
        <h1>Aprende a tocar guitarra con el método más fácil, simple y efectivo</h1>
        <p>En poco tiempo estarás tocando tus canciones favoritas con las mejores clases de guitarra online</p>
        <button className="register-button">Regístrate</button>
        <button className="materials-button">Materiales de aprendizaje</button>
      </div>
      <div className="right-section">
        <img src="image.png" alt="Video Placeholder" className="video-placeholder" />
      </div>
    </main>
  );
}

export default MainContent;
