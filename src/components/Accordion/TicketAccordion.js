import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

function TicketAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  let totalPrice = quantity * props.price;
  let incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  let decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else return;
  };
  const dispatch = useContext(DispatchContext);
  function addToBasket() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        name: props.name,
        price: props.price,
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
  }
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
            <h4>Total Price: {totalPrice} ,- DKK</h4>
            <button className="yellowbutton" onClick={addToBasket} disabled={totalPrice === 0}>
              add to cart
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default TicketAccordion;
