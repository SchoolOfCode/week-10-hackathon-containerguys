import React from "react";
import "./Breakfast.css";

const Breakfast = ({ breakfast, handleBreakfast }) => {
  return (
    <div className="meal" id="breakfast">
      <h2>Breakfast: {breakfast.name}</h2>
      <img src={breakfast.image} alt="Meal" />
      <button onClick={handleBreakfast}>Get Breakfast</button>
    </div>
  );
};

export default Breakfast;
