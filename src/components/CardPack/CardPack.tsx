import React from "react";
import "./CardPack.scss";
import Card from "../Card/Card";

const CardPack = () => {
  return (
    <div className="card-container">
      <div className="pack-of-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
        
      
      </div>
    </div>
  );
};

export default CardPack;
