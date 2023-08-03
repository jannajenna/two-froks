import { useState } from "react";
import styles from "./Accordion.module.css";
import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { TicketData } from "@/data/ticketData";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";

function TentAccordionCounters(props) {
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

  return (
    <>
      <div className={styles.itemQuantity}>
        <h4>
          {props.name} - {props.price},-/stk
        </h4>
        <button onClick={decrementQuantity}>
          <MinusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
        </button>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>
          <PlusSquareOutlined style={{ fontSize: "32px", color: "#2b164e" }} />
        </button>
        <h4>{totalPrice},-DKK</h4>
      </div>
    </>
  );
}

export default TentAccordionCounters;
