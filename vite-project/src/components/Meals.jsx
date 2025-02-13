import React, { useState } from "react";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import "./Meals.css"; // For styling the carousel

const Meals = ({
  breakfast,
  handleBreakfast,
  lunch,
  handleLunch,
  dinner,
  handleDinner,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const meals = [
    {
      id: 0,
      title: "Breakfast",
      component: (
        <Breakfast breakfast={breakfast} handleBreakfast={handleBreakfast} />
      ),
    },
    {
      id: 1,
      title: "Lunch",
      component: <Lunch lunch={lunch} handleLunch={handleLunch} />,
    },
    {
      id: 2,
      title: "Dinner",
      component: <Dinner dinner={dinner} handleDinner={handleDinner} />,
    },
  ];

  const changeDish = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {meals.map((meal, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + meals.length) % meals.length;
          const isNext = index === (currentIndex + 1) % meals.length;

          return (
            <div
              key={meal.id}
              className={`meal ${isActive ? "active" : ""} ${
                isPrev ? "prev" : ""
              } ${isNext ? "next" : ""}`}
              onClick={() => changeDish(index)}
            >
              <div className="meal-image">{meal.component}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
