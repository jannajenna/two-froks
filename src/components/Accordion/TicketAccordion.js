import { useState } from "react";
import styles from "./Accordion.module.css";
import YellowButton from "@/components/Buttons/YellowButton";

function TicketAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  let incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  let decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else return;
  };
  return (
    <article className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? "-" : "+"}</div>
        <h3>{props.name}</h3>
        <h4 className={styles.price}>{props.price},- DKK</h4>
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.description}
          <div className={styles.itemQuantity}>
            <h4>Quantity:</h4>
            <button onClick={decrementQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <div className={styles.flex}>
            <h4>Total Price: {quantity * props.price} ,-</h4>
            <YellowButton name="add to cart" />
          </div>
        </div>
      )}
    </article>
  );
}

export default TicketAccordion;
