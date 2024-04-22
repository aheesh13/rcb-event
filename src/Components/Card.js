import React from "react";
import "../CustomCss/Card.css"; // Import the CSS file

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
      <div className="overlay">
        <div className="content">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
