import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./CartItem.module.css";
import { Modal } from "antd";
import { StoreContext } from "@/contexts/storeContext";

function TentItem(props) {
  const state = useContext(StoreContext);
  const { basket } = state;
  const dispatch = useContext(DispatchContext);
  let totalQuantity = 0;
  if (props.quantity2 && props.quantity3) {
    totalQuantity = props.quantity2 + props.quantity3;
  }
  if (props.quantity2) {
    totalQuantity = props.quantity2;
  }
  if (props.quantity3) {
    totalQuantity = props.quantity3;
  }
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
  function deleteTentFor2() {
    dispatch({
      action: "REMOVE_TENT",
      payload: {
        name: props.name,
        price: props.price2,
      },
    });
  }
  function deleteTentFor3() {
    dispatch({
      action: "REMOVE_TENT",
      payload: {
        name: props.name,
        price: props.price3,
      },
    });
  }
  function removeTentFor2() {
    dispatch({
      action: "REMOVE_ONE_TENT",
      payload: {
        name: props.name,
        price: props.price2,
      },
    });
  }
  function addTentFor2() {
    console.log("total quantity:", totalQuantity);
    if (props.available <= totalQuantity) {
      modalError();
      return;
    }
    if (!ticketQuantity || ticketQuantity <= totalQuantity) {
      modalError2();
      return;
    } else {
      dispatch({
        action: "ADD_TENT",
        payload: {
          name: props.name,
          price: props.price2,
        },
      });
    }
  }
  function removeTentFor3() {
    dispatch({
      action: "REMOVE_ONE_TENT",
      payload: {
        name: props.name,
        price: props.price3,
      },
    });
  }
  function addTentFor3() {
    if (props.available < totalQuantity) {
      modalError();
      return;
    }
    if (!ticketQuantity || ticketQuantity < totalQuantity) {
      modalError2();
      return;
    } else {
      dispatch({
        action: "ADD_TENT",
        payload: {
          name: props.name,
          price: props.price3,
        },
      });
    }
  }
  const shouldRenderTentFor2 = props.quantity2 > 0;
  const shouldRenderTentFor3 = props.quantity3 > 0;
  const shouldRenderTitle = props.quantity3 > 0 || props.quantity2 > 0;
  return (
    <div>
      {shouldRenderTitle ? <h3>{props.name} Camping</h3> : null}
      {shouldRenderTentFor2 ? (
        <div className={styles.cartItemMultiple}>
          <p> 2 person tent</p>
          <p> {props.quantity2}x</p>
          <button className={styles.cartButton} onClick={removeTentFor2}>
            <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <button className={styles.cartButton} onClick={addTentFor2}>
            <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <p className={styles.cartItemPrice}>{props.quantity2 * props.price2},-DKK</p>
          <button className={styles.cartButton} onClick={deleteTentFor2}>
            <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
        </div>
      ) : null}
      {shouldRenderTentFor3 ? (
        <div className={styles.cartItemMultiple}>
          <p> 3 person tent</p>
          <p> {props.quantity3}x</p>
          <button className={styles.cartButton} onClick={removeTentFor3}>
            <MinusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <button className={styles.cartButton} onClick={addTentFor3}>
            <PlusSquareOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
          <p className={styles.cartItemPrice}>{props.quantity3 * props.price3},-DKK</p>
          <button className={styles.cartButton} onClick={deleteTentFor3}>
            <DeleteOutlined style={{ fontSize: "24px", color: "#2b164e" }} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TentItem;
