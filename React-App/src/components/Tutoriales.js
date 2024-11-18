import React from "react";
import TutorialCard from "./CardTutorials";
import "../Styles/login.css";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Tutorial 1",
      description: "Aprende acordes básicos con este tutorial.",
      image: "ImageFondoGuitarra.jpeg", // Asegúrate de que la ruta de la imagen sea correcta
    },
    {
      id: 2,
      title: "Tutorial 2",
      description: "Mejora tu ritmo con técnicas avanzadas.",
      image: "ImageFondoGuitarra.jpeg",
    },
    {
      id: 3,
      title: "Tutorial 3",
      description: "Domina el fingerpicking.",
      image: "ImageFondoGuitarra.jpeg",
    },
    {
      id: 4,
      title: "Tutorial 4",
      description: "Explora canciones populares.",
      image: "ImageFondoGuitarra.jpeg",
    },
  ];

  return (
    <div className="content">
      <h2>Tutoriales</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            image={tutorial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
