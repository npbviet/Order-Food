import React, { useEffect, useContext, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../../store/cart-context";
import CartModal from "../Cart/CartModal";

export function HeaderCartButton(props) {
  const { items } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [openModal, setOpenmodal] = useState(false);

  useEffect(() => {
    setTotal(0);
    setTotal(items.reduce((acc, item) => acc + item.amount, 0));
  }, [items]);

  const startModal = () => {
    setOpenmodal(true);
  };
  const closeModal = () => {
    setOpenmodal(false);
  };
  return (
    <>
      {openModal && <CartModal onClose={closeModal} />}
      <div className={styles.button} onClick={startModal}>
        <FontAwesomeIcon
          className={styles.icon}
          icon="fa-solid fa-cart-shopping"
        />
        <div> Your Cart</div>
        <div className={styles.badge}> {total} </div>
      </div>
    </>
  );
}
