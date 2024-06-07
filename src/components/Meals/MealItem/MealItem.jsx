import React, { useContext, useRef } from "react";
import styles from "./MealItem.module.css";
import formStyles from "./MealItemForm.module.css";
import stylesInput from "../../UI/Input.module.css";
import CartContext from "../../../store/cart-context";

export const MealItem = (props) => {
  const quantityRef = useRef(null);
  const { items, addItem } = useContext(CartContext);

  // console.log(items);

  return (
    <>
      <div className={styles.meal}>
        <h3>{props.value.name}</h3>
        <div className={styles.description}>{props.value.description}</div>
        <div className={styles.price}>{props.value.price} $</div>
      </div>
      <div className={formStyles.form}>
        <div className={stylesInput.input}>
          <label>Amount</label>
          <input type="number" ref={quantityRef}></input>
        </div>
        <button
          onClick={() =>
            addItem({
              ...props.value,
              amount: Number(quantityRef.current.value),
            })
          }
        >
          + Add
        </button>
      </div>
    </>
  );
};
