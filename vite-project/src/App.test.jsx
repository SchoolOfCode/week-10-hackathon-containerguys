import { test, expect } from "vitest";
// import app from "./App.jsx";

test("This should fail - broken endpoint", async () => {
  const response = await fetch(
    "https://www.themeal"
  );
  expect(response.body).not.toBe(null)
});

test("This should pass", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
  );
  expect(response.body).not.toBe(null)
});


test("this should always fail", () => {
  const response = "";
  expect(response).toBe("test");
});