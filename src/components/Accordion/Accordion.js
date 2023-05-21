import styles from "./Accordion.module.css";
import { useState } from "react";

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
          <h5 className={styles.price}>Total Price: 0,- DKK</h5>
          <button className="yellowbutton">add to cart</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
