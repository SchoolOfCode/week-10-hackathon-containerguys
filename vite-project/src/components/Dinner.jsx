import React from "react";
import "./Dinner.css";

const Dinner = ({ dinner, handleDinner }) => {
  return (
    <div className="meal" id="dinner">
      <h2>Dinner: {dinner.name}</h2>
      <img src={dinner.image}></img>
      <button onClick={handleDinner}>Get dinner</button>
    </div>
  );
};

export default Dinner;
