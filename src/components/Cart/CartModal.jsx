import React, { useContext, useState } from "react";
import classes from "../UI/Modal.module.css";
import styles from "./Cart.module.css";
import { CartItem } from "./CartItem";
import CartContext from "../../store/cart-context";
import UserInform from "../Information/UserInform";

const CartModal = (props) => {
  const { items, totalAmount, resetItem } = useContext(CartContext);
  const [validInform, setValidInform] = useState(false);

  function handleOrder(event) {
    event.preventDefault();

    if (!validInform || items.length === 0) {
      alert("Please valid your information and ensure your cart is not empty.");
      return;
    } else {
      resetItem();
      alert("Order successfully");
    }
  }

  const validFn = (e) => {
    setValidInform(e);
    console.log(e);
  };
  return (
    <>
      <div className={classes.modal}>
        {items.map((item) => (
          <div key={item.id} className={styles.meal}>
            <CartItem value={item} />
          </div>
        ))}

        <div className={styles.total}>
          Total Amount<div>{totalAmount.toFixed(2)}$</div>
        </div>
        <UserInform onValid={validFn} />
        <div className={styles.actions}>
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>
          <button type="button" onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
      <div className={classes.backdrop}></div>
    </>
  );
};

export default CartModal;
