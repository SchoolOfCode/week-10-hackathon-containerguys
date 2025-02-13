import React from "react";
import "./Lunch.css";

const Lunch = ({ lunch, handleLunch }) => {
  return (
    <div className="meal" id="lunch">
      <h2>Lunch: {lunch.name}</h2>
      <img src={lunch.image}></img>
      <button onClick={handleLunch}>Get lunch</button>
    </div>
  );
};
export default Lunch;
