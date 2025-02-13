import { useState } from "react";
import Meals from "./components/Meals.jsx";
import "./App.css";

function App() {
  const [breakfast, setBreakfast] = useState("Pancakes");
  const [lunch, setLunch] = useState("Sandwich");
  const [dinner, setDinner] = useState("Spaghetti");

  const handleBreakfast = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const json = await response.json();
    const randomIndex = Math.floor(Math.random() * json.meals.length);
    const mealId = json.meals[randomIndex].idMeal;
    const fullMealById = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const fullJson = await fullMealById.json();
    console.log(fullJson);
    setBreakfast({
      name: fullJson.meals[0].strMeal,
      image: fullJson.meals[0].strMealThumb,
    });
  };

  const handleLunch = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const json = await response.json();
    const randomIndex = Math.floor(Math.random() * json.meals.length);
    const mealId = json.meals[randomIndex].idMeal;
    const fullMealById = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const fullJson = await fullMealById.json();
    console.log(fullJson);
    setLunch({
      name: fullJson.meals[0].strMeal,
      image: fullJson.meals[0].strMealThumb,
    });
  };

  const handleDinner = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const json = await response.json();
    const randomIndex = Math.floor(Math.random() * json.meals.length);
    const mealId = json.meals[randomIndex].idMeal;
    const fullMealById = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const fullJson = await fullMealById.json();
    console.log(fullJson);
    setDinner({
      name: fullJson.meals[0].strMeal,
      image: fullJson.meals[0].strMealThumb,
    });
  };

  return (
    <div className="App">
      <Meals
        breakfast={breakfast}
        handleBreakfast={handleBreakfast}
        lunch={lunch}
        handleLunch={handleLunch}
        dinner={dinner}
        handleDinner={handleDinner}
      />
    </div>
  );
}

export default App;
