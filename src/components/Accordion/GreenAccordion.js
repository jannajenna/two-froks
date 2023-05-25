import { useState } from "react";
import styles from "./Accordion.module.css";
import YellowButton from "@/components/Buttons/YellowButton";

function GreenAccordion(props) {
  const [isActive, setIsActive] = useState(false);
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
          <div className={styles.flex}>
            <h4>Total Price: {props.price} ,-</h4>
            <YellowButton name="add to cart" />
          </div>
        </div>
      )}
    </article>
  );
}

export default GreenAccordion;
