import { useState } from "react";
import React from "react";
import { Header } from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import "./App.css";
import { MealsSummary } from "./components/Meals/MealsSummary";
import { AvailableMeals } from "./components/Meals/AvailableMeals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartProvider>
        <Header />
        <MealsSummary />
        <AvailableMeals />
      </CartProvider>
    </>
  );
}

export default App;
