import React from "react";
import "../Styles/tutorialCard.css";

const TutorialCard = ({ title, description, image }) => {
  return (
    <div className="tutorial-card">
      <img src={image} alt={title} className="tutorial-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tutorial-actions">
        <button className="view-button">Ver</button>
        <button className="like-button">❤</button>
      </div>
    </div>
  );
};

export default TutorialCard;
