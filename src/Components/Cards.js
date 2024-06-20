// Cards.js
import React from "react";
import Card from "./Card"; 
import image1 from "../Images/Img1.jpeg";
import image2 from "../Images/Img4.jpeg";

const Cards = () => {
  return (
    <div className="card-container">
      <Card
        imageUrl={image1}
        title="Title 1"
        description="Floor 1 Celebration"
      />
      <Card
        imageUrl={image2}
        title="Title 2"
        description="Roof Top Celebration"
      />
    </div>
  );
};

export default Cards;
