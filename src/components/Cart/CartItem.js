import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";

function CartItem(props) {
  const dispatch = useContext(DispatchContext);
  function removeOne() {
    dispatch({
      action: "REMOVE_ONE_PRODUCT",
      payload: {
        id: props.name,
      },
    });
  }
  return (
    <li className={styles.cartItem}>
      <p> {props.name}</p>
      <p> {props.amount}</p>
      <button onClick={removeOne}>
        <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
      </button>
      <button>
        <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
      </button>
      <p className={styles.cartItemPrice}>{props.price},-DKK</p>
      <button>
        <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
      </button>
    </li>
  );
}

export default CartItem;
