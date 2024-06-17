// Card.js
import React from "react";
import "../CustomCss/Card.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-img" src={imageUrl} alt="Card image" />
        <div className="card-overlay">
          <div className="card-content">
            <p className="card-text">{description}</p>
            <Link to="/booking" className="nav-link">
          <button className="book-button">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
