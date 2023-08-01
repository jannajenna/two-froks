import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";

function TicketItem(props) {
  const dispatch = useContext(DispatchContext);
  function removeOne() {
    dispatch({
      action: "REMOVE_ONE_PRODUCT",
      payload: {
        name: props.name,
      },
    });
  }
  function addOne() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        name: props.name,
      },
    });
  }
  const title = props.name;
  const shouldRenderButton = title === "Regular" || title === "VIP";
  return (
    <div className={styles.cartItemMultiple}>
      <h3> {props.name} ticket</h3>
      <p> {props.amount}x</p>
      {shouldRenderButton ? (
        <button className={styles.cartButton} onClick={removeOne}>
          <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
        </button>
      ) : (
        <div></div>
      )}
      {shouldRenderButton ? (
        <button className={styles.cartButton} onClick={addOne}>
          <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
        </button>
      ) : (
        <div></div>
      )}
      <p className={styles.cartItemPrice}>{props.price},-DKK</p>
      <button className={styles.cartButton} onClick={() => dispatch({ action: "EMPTY_BASKET" })}>
        <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
      </button>
    </div>
  );
}

export default TicketItem;
