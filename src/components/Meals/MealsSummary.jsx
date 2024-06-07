import styles from "./MealsSummary.module.css";

export function MealsSummary() {
  return (
    <div className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <div>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
        <br />
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs
      </div>
    </div>
  );
}
