import React, { useState, useEffect } from "react";
import { MealItem } from "./MealItem";
import styles from "./MealItemForm.module.css";
import object from "../../../data/dummydata.json";
import Card from "../../UI/Card";
import useHttp from "../../Hook/useHttp";

function MealItemForm() {
  // const [items, setItems] = useState(object);
  async function addMealHandler() {
    const response = await fetch(
      "https://lab-12-df52a-default-rtdb.firebaseio.com/meals.json",
      {
        method: "PUT",
        body: JSON.stringify(object),
      }
    );
    console.log(await response.json());
    await sendRequest();
  }

  const { items, isLoading, error, sendRequest } = useHttp(
    "https://lab-12-df52a-default-rtdb.firebaseio.com/meals.json"
  );
  useEffect(() => {
    sendRequest();
    // addMealHandler();
  }, []);
  let content = <p>No meals found. Please waiting!!</p>;

  if (items.length > 0) {
    content = (
      <Card>
        {items.map((item) => (
          <div key={item.id} className={styles.meal}>
            <MealItem value={item}></MealItem>
          </div>
        ))}
      </Card>
    );
  }

  return <div>{content}</div>;
}
export default MealItemForm;
