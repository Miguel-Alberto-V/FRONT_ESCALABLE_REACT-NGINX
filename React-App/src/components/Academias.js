import React from 'react';
import AcademiaCard from './AcademiaCard';
import '../Styles/Academias.css'; // Archivo CSS para la vista

const academias = [
  { id: 1, name: 'Academia 1', image: 'images3.jpeg' },
  { id: 2, name: 'Academia 2', image: 'images3.jpeg' },
  { id: 3, name: 'Academia 3', image: 'images3.jpeg' },
  // Agrega más academias aquí
];

const Academias = () => {
  const handleViewAcademy = (id) => {
    alert(`Ver detalles de la Academia ${id}`);
  };

  return (
    <div className="academias-container">
      <h1>
        Conoce las <span className="highlight">academias</span> afiliadas
      </h1>
      <div className="academias-filter">
        <span>Filtrar por:</span> <button>Países</button> <button>Ciudades</button>
      </div>
      <div className="academias-grid">
        {academias.map((academia) => (
          <AcademiaCard
            key={academia.id}
            name={academia.name}
            image={academia.image}
            onClick={() => handleViewAcademy(academia.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Academias;
