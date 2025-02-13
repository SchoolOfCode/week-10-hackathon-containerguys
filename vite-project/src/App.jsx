import { useState } from "react";
import Meals from "./components/Meals.jsx";
import ChatBot from "./components/ChatBot.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  const [breakfast, setBreakfast] = useState({
    name: "Awaiting",
    image: "/sunrise.png",
  });
  const [lunch, setLunch] = useState({
    name: "Awaiting",
    image: "/sun.png",
  });
  const [dinner, setDinner] = useState({
    name: "Awaiting",
    image: "/sunset.png",
  });

  const [showElement, setShowElement] = useState(false);

  const [foodPref, setFoodPref] = useState([]);

  const randomFoodPref = foodPref[Math.floor(Math.random() * foodPref.length)];

  const handleBreakfast = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
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
    console.log(randomFoodPref);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomFoodPref}`
    );
    const json = await response.json();
    console.log(json);
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
    console.log(foodPref);
    console.log(`the random food pref is: ${randomFoodPref}`);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
        foodPref[Math.floor(Math.random() * foodPref.length)]
      }`
    );
    const json = await response.json();
    console.log(json);
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
      {showElement ? (
        <>
          <Header />
          <Meals
            breakfast={breakfast}
            handleBreakfast={handleBreakfast}
            lunch={lunch}
            handleLunch={handleLunch}
            dinner={dinner}
            handleDinner={handleDinner}
          />
        </>
      ) : (
        <ChatBot setShowElement={setShowElement} setFoodPref={setFoodPref} />
      )}
    </div>
  );
}

export default App;
