import { useContext, useRef } from "react";
import styles from "./MealItem.module.css";
import formStyles from "./MealItemForm.module.css";
import stylesInput from "../../UI/Input.module.css";
import CartContext from "../../../store/cart-context";

export const MealItem = (props) => {
  const quantityRef = useRef(null);
  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    const amount = Number(quantityRef.current.value);

    if (isNaN(amount) || amount <= 0) {
      alert("Vui lòng nhập số lượng hợp lệ!");
      return;
    }

    addItem({
      ...props.value,
      amount,
    });

    alert("Thêm vào giỏ hàng thành công!");
  };

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
          <input
            type="number"
            min="0"
            step="1"
            defaultValue="1"
            ref={quantityRef}
          />
        </div>
        <button onClick={handleAddItem}>+ Add</button>
      </div>
    </>
  );
};
