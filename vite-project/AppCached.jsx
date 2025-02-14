import { useState } from "react";

// const handleBreakfast = async () => {
//     const response = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
//     );
//     const json = await response.json();
//     const randomIndex = Math.floor(Math.random() * json.meals.length);
//     const mealId = json.meals[randomIndex].idMeal;
//     const fullMealById = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//     );
//     const fullJson = await fullMealById.json();
//     console.log(fullJson);
//     setBreakfast({
//       name: fullJson.meals[0].strMeal,
//       image: fullJson.meals[0].strMealThumb,
//     });
//   };

let cache = {};  // In-memory cache object

const handleBreakfast = async () => {
    // Check if the "Breakfast" data is already in the cache
    if (cache.breakfastData) {
        const json = cache.breakfastData; // Use cached data
        const randomIndex = Math.floor(Math.random() * json.meals.length);
        const mealId = json.meals[randomIndex].idMeal;
        // Check if the meal details are cached
        if (cache[mealId]) {
            // Use cached full meal details
            const fullJson = cache[mealId];
            setBreakfast({
                name: fullJson.meals[0].strMeal,
                image: fullJson.meals[0].strMealThumb,
            });
            return;
        }
    }

    // Fetch "Breakfast" data if not in cache
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
    );
    const json = await response.json();
    // Store the fetched "Breakfast" data in cache
    cache.breakfastData = json;

    // Pick a random meal
    const randomIndex = Math.floor(Math.random() * json.meals.length);
    const mealId = json.meals[randomIndex].idMeal;

    // Fetch full meal details if not in cache
    const fullMealById = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const fullJson = await fullMealById.json();

    // Cache the full meal details for future use
    cache[mealId] = fullJson;

    // Set the breakfast details to state
    setBreakfast({
        name: fullJson.meals[0].strMeal,
        image: fullJson.meals[0].strMealThumb,
    });
};


