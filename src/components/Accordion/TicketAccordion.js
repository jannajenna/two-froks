import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { notification } from "antd";

function TicketAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(0);
  let totalPrice = quantity * props.price;
  const [api, contextHolder] = notification.useNotification();
  function openNotification() {
    api.open({
      message: "Tickets added to cart",
      description: "We will reserve them for 5 minutes.",
      duration: 3,
    });
  }
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
    openNotification();
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: props.name,
        price: props.price,
        quantity: quantity,
      },
    });
  }
  return (
    <article className={styles.item}>
      <>{contextHolder}</>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{isActive ? <UpOutlined style={{ fontSize: "24px", color: "#2b164e" }} /> : <DownOutlined style={{ fontSize: "24px", color: "#2b164e" }} />}</div>
        <h3>{props.name}</h3>
        <h4 className={styles.price}>{props.price},- DKK</h4>
      </div>
      {isActive && (
        <div className={styles.content}>
          {props.description}
          <div className={styles.itemQuantity}>
            <h4>Quantity:</h4>
            <button onClick={decrementQuantity}>
              <MinusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
            </button>
            <p>{quantity}</p>
            <button onClick={incrementQuantity}>
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

export default TicketAccordion;
