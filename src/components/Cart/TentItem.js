import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";

function TentItem(props) {
  const dispatch = useContext(DispatchContext);
  function removeTentFor2() {
    dispatch({
      action: "REMOVE_ONE_PRODUCT",
      payload: {
        id: props.name,
        price: props.price2,
      },
    });
  }
  function addTentFor2() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        name: props.name,
        price: props.price2,
      },
    });
  }
  function removeTentFor3() {
    dispatch({
      action: "REMOVE_ONE_PRODUCT",
      payload: {
        id: props.name,
        price: props.price3,
      },
    });
  }
  function addTentFor3() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        name: props.name,
        price: props.price3,
      },
    });
  }
  const shouldRenderTentFor2 = props.amount > 0;
  const shouldRenderTentFor3 = props.amount2 > 0;
  return (
    <div>
      <h3>{props.name} Camping</h3>
      {shouldRenderTentFor2 ? (
        <div className={styles.cartItemMultiple}>
          <p> 2 person tent</p>
          <p> {props.amount}x</p>
          <button className={styles.cartButton} onClick={removeTentFor2}>
            <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <button className={styles.cartButton} onClick={addTentFor2}>
            <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <p className={styles.cartItemPrice}>{props.price},-DKK</p>
          <button className={styles.cartButton} onClick={() => dispatch({ action: "EMPTY_BASKET" })}>
            <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
        </div>
      ) : null}
      {shouldRenderTentFor3 ? (
        <div className={styles.cartItemMultiple}>
          <p> 3 person tent</p>
          <p> {props.amount2}x</p>
          <button className={styles.cartButton} onClick={removeTentFor3}>
            <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <button className={styles.cartButton} onClick={addTentFor3}>
            <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <p className={styles.cartItemPrice}>{props.price2},-DKK</p>
          <button className={styles.cartButton} onClick={() => dispatch({ action: "EMPTY_BASKET" })}>
            <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TentItem;
