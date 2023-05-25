import { useState } from "react";
import styles from "./Accordion.module.css";
import YellowButton from "@/components/Buttons/YellowButton";

function TentAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [tentFor2quantity, setTentfFor2Quantity] = useState(0);
  const [tentFor3quantity, setTentfFor3Quantity] = useState(0);
  let increment2Quantity = () => {
    setTentfFor2Quantity(tentFor2quantity + 1);
  };

  let decrement2Quantity = () => {
    if (tentFor2quantity > 0) {
      setTentfFor2Quantity(tentFor2quantity - 1);
    } else return;
  };
  let increment3Quantity = () => {
    setTentfFor3Quantity(tentFor3quantity + 1);
  };

  let decrement3Quantity = () => {
    if (tentFor3quantity > 0) {
      setTentfFor3Quantity(tentFor3quantity - 1);
    } else return;
  };
  return (
    <article className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? "-" : "+"}</div>
        <h3>{props.name}</h3>
        <h4 className={styles.available}>Available spots: {props.available}</h4>
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.description}
          <div className={styles.itemQuantity}>
            <h4>2 person tent: {props.price2},- DKK</h4>
            <button onClick={decrement2Quantity}>-</button>
            <p>{tentFor2quantity}</p>
            <button onClick={increment2Quantity}>+</button>
          </div>
          <div className={styles.itemQuantity}>
            <h4>3 person tent: {props.price3},- DKK</h4>
            <button onClick={decrement3Quantity}>-</button>
            <p>{tentFor3quantity}</p>
            <button onClick={increment3Quantity}>+</button>
          </div>
          <div className={styles.flex}>
            <h4>Total Price: {tentFor2quantity * props.price2 + tentFor3quantity * props.price3} ,-</h4>
            <YellowButton name="add to cart" />
          </div>
        </div>
      )}
    </article>
  );
}

export default TentAccordion;
