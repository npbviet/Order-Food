import React from "react";
import styles from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </div>
      <div className={styles["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </header>
  );
}
