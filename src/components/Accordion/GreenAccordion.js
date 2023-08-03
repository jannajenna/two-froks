import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

function GreenAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useContext(DispatchContext);
  const totalPrice = props.price;
  function addToBasket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: props.name,
        price: props.price,
        quantity: 1,
      },
    });
  }
  return (
    <article className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? <UpOutlined style={{ fontSize: "24px", color: "#2b164e" }} /> : <DownOutlined style={{ fontSize: "24px", color: "#2b164e" }} />}</div>
        <h3>{props.name}</h3>
        <h4 className={styles.price}>{props.price},- DKK</h4>
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.description}
          <div className={styles.flex}>
            <h4>Price: {totalPrice} ,- DKK</h4>
            <button className="yellowbutton" onClick={addToBasket}>
              add to cart
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default GreenAccordion;
