import React from 'react';
import '../Styles/AcademiaCard.css'; // Archivo CSS para los estilos de la tarjeta

const AcademiaCard = ({ image, name, onClick }) => {
  return (
    <div className="academia-card">
      <img src={image} alt={`Imagen de ${name}`} className="academia-card-image" />
      <h3>{name}</h3>
      <button className="academia-card-button" onClick={onClick}>
        Ver
      </button>
    </div>
  );
};

export default AcademiaCard;
