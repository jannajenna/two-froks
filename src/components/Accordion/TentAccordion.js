import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import { Modal, notification } from "antd";
import { StoreContext } from "@/contexts/storeContext";

function TentAccordion(props) {
  const state = useContext(StoreContext);
  const { basket } = state;
  const [isActive, setIsActive] = useState(false);
  const [tentFor2quantity, setTentfFor2Quantity] = useState(0);
  const [tentFor3quantity, setTentfFor3Quantity] = useState(0);
  let totalPrice = tentFor2quantity * props.price2 + tentFor3quantity * props.price3;
  let totalQuantity = tentFor2quantity + tentFor3quantity;
  let ticketQuantity = 0;
  if (basket) {
    basket.forEach((item) => {
      if (item.price) {
        ticketQuantity += item.quantity;
      }
    });
  }
  function modalError() {
    Modal.error({
      title: `There is no more spots in ${props.name} area.`,
      content: "Please check another camping area.",
    });
  }
  function modalError2() {
    Modal.error({
      title: `You can't reserve more tents than tickets.`,
      content: "You are only allowed 1 tent per 1 ticket.",
    });
  }
  const [api, contextHolder] = notification.useNotification();
  function openNotification() {
    api.open({
      message: "Tents added to cart",
      description: "We will reserve them for 5 minutes.",
      duration: 3,
    });
  }
  let increment2Quantity = () => {
    if (props.available !== 0) {
      if (props.available <= totalQuantity) {
        modalError();
      } else {
        setTentfFor2Quantity(tentFor2quantity + 1);
      }
    } else {
      modalError();
    }
  };

  let decrement2Quantity = () => {
    if (props.available !== 0) {
      if (tentFor2quantity > 0) {
        setTentfFor2Quantity(tentFor2quantity - 1);
      } else return;
    } else return;
  };
  let increment3Quantity = () => {
    if (props.available !== 0) {
      if (props.available <= totalQuantity) {
        modalError();
      } else {
        setTentfFor3Quantity(tentFor3quantity + 1);
      }
    } else modalError();
  };

  let decrement3Quantity = () => {
    if (props.available !== 0) {
      if (tentFor3quantity > 0) {
        setTentfFor3Quantity(tentFor3quantity - 1);
      } else return;
    } else return;
  };
  const dispatch = useContext(DispatchContext);
  console.log("ticketQuantity:", ticketQuantity);
  function addToBasket() {
    if (!ticketQuantity || ticketQuantity <= totalQuantity) {
      modalError2();
      return;
    } else {
      openNotification();
      console.log("available", props.available);
      dispatch({
        action: "ADD_TENT",
        payload: {
          name: props.name,
          price2: props.price2,
          price3: props.price3,
          tentFor2quantity: tentFor2quantity,
          tentFor3quantity: tentFor3quantity,
          available: props.available,
        },
      });
    }
  }
  return (
    <article className={styles.item}>
      <>{contextHolder}</>
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
