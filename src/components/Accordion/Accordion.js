import styles from "./Accordion.module.css";
import { useState } from "react";
import YellowButton from "../Buttons/YellowButton";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  function addToCart() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        id: props.id,
        price: props.price,
        productdisplayname: props.productdisplayname,
      },
    });
  }

  return (
    <article className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.content}>
          {content}
          <h4 className={styles.price}>Total Price: 0,- DKK</h4>
          <div className={styles.flex}>
            <YellowButton onClick={addToCart} name="add to cart" />
          </div>
        </div>
      )}
    </article>
  );
};

export default Accordion;
