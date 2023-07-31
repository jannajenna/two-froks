import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";

function TentAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [tentFor2quantity, setTentfFor2Quantity] = useState(0);
  const [tentFor3quantity, setTentfFor3Quantity] = useState(0);
  let totalPrice = tentFor2quantity * props.price2 + tentFor3quantity * props.price3;
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
  const dispatch = useContext(DispatchContext);
  function addToBasket() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        name: props.name,
        price2: props.price2,
        price3: props.price3,
        tentFor2quantity: tentFor2quantity,
        tentFor3quantity: tentFor3quantity,
        totalPrice: totalPrice,
      },
    });
  }
  return (
    <article className={styles.item}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div className="accordionToggle">{isActive ? <UpOutlined style={{ fontSize: "24px", color: "#2b164e" }} /> : <DownOutlined style={{ fontSize: "24px", color: "#2b164e" }} />}</div>
        <h3>{props.name}</h3>
        <h4 className={styles.available}>Available spots: {props.available}</h4>
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.description}
          <div className={styles.itemQuantity}>
            <h4>2 person tent: {props.price2},- DKK</h4>
            <button onClick={decrement2Quantity}>
              <MinusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
            </button>
            <p>{tentFor2quantity}</p>
            <button onClick={increment2Quantity}>
              <PlusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
            </button>
          </div>
          <div className={styles.itemQuantity}>
            <h4>3 person tent: {props.price3},- DKK</h4>
            <button onClick={decrement3Quantity}>
              <MinusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
            </button>
            <p>{tentFor3quantity}</p>
            <button onClick={increment3Quantity}>
              <PlusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
            </button>
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

export default TentAccordion;
