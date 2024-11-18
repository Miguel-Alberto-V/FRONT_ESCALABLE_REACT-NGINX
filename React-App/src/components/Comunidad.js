import React from 'react';
import '../Styles/Comunidad.css'; // Archivo para los estilos de esta vista

const Comunidad = () => {
    return (
      <div className="comunidad-container">
        {/* Lado izquierdo: imagen completa */}
        <div className="comunidad-image">
          <img
            src="image.png" // Reemplaza con la ruta de tu imagen
            alt="Gráficos de la comunidad"
          />
        </div>
  
        {/* Lado derecho: texto y botón */}
        <div className="comunidad-text">
          <h1>
            La comunidad ideal <br />
            <span>para aprender a</span> <br />
            <span className="highlight">tocar la guitarra</span>
          </h1>
          <p>
            Únete a nuestra comunidad y comparte tu pasión por la guitarra con
            otros entusiastas mientras aprendes y creces juntos.
          </p>
          <button className="comunidad-btn">unirse a la comunidad</button>
        </div>
      </div>
    );
  };
  
  export default Comunidad;
