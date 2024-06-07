import React from "react";
import MealItemForm from "./MealItem/MealItemForm";
import styles from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  return (
    <div className={styles.meals}>
      <ul>
        <MealItemForm></MealItemForm>
      </ul>
    </div>
  );
};
