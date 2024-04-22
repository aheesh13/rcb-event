import React from "react";
import Card from "./Card"; 
import image1 from "../Images/Img1.jpeg";
import image2 from "../Images/Img2.jpeg";

const Cards = ({ imageUrl, title, description }) => {
    return (
        <div  className="card-container">
      <Card
      imageUrl={image1}
      title="t1"
        description="Description for Card 1 goes here..."/>
        <Card
      imageUrl={image1}
      title="t1"
        description="Description for Card 1 goes here..."/>
        </div>
    );
  };

  export default Cards;