import { useState } from "react";
import Meals from "./components/Meals.jsx";
import ChatBot from "./components/ChatBot.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://11950af4faa15c3d95445e78f2bfb1b7@o4508800299237376.ingest.de.sentry.io/4508817153261648",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodPref[Math.floor(Math.random() * foodPref.length)]
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
          <button onClick={() => { throw new Error("This is your first error!"); }}>Break the world</button>;
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
        <>
          <Hero />
          <ChatBot setShowElement={setShowElement} setFoodPref={setFoodPref} />
        </>
      )}
    </div>
  );
}

export default App;
