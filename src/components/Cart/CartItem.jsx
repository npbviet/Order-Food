import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./CartItem.module.css";
export function CartItem(props) {
  const { items, addItem, removeItem } = useContext(CartContext);
  console.log(props.value);
  return (
    <>
      <div className={styles["cart-item"]}>
        <div>
          <h2>{props.value.name}</h2>
          <div className={styles["summary"]}>
            <div className={styles.price}>{props.value.price}$</div>
            <div className={styles.amount}>x{props.value.amount}</div>
          </div>
        </div>
        <div className={styles["actions"]}>
          <button type="button" onClick={() => removeItem(props.value.id)}>
            -
          </button>
          <button
            type="button"
            onClick={() => addItem({ ...props.value, amount: 1 })}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
