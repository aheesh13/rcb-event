// Card.js
import React from "react";
import "../CustomCss/Card.css"; // Import the CSS file

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="card-img" src={imageUrl} alt="Card image" />
        <div className="overlay">
          <div className="content">
            <p className="card-text">{description}</p>
            <a href="#" className="btn">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
