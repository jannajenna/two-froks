import styles from "./Accordion.module.css";
import { useState } from "react";
import YellowButton from "../Buttons/YellowButton";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.content}>
          {content}
          <h4 className={styles.price}>Total Price: 0,- DKK</h4>
          <div className={styles.flex}>
            <YellowButton name="add to cart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
