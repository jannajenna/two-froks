import styles from "./CartItem.module.css";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

function CartItemCheckout(props) {
  const state = useContext(StoreContext);
  let total = 0;
  if (state.basket) {
    state.basket.forEach((item) => {
      if (item.price) {
        total += item.price * item.quantity;
      }
      if (item.price2) {
        total += item.price2 * item.quantity2;
      }
      if (item.price3) {
        total += item.price3 * item.quantity3;
      }
    });
  }
  return (
    <li className={styles.cartLi}>
      <h4> {props.name} </h4>
      <div className={styles.cartItemCheckout}>
        <div>
          {props.quantity ? <p> {props.quantity}x</p> : null}
          {props.quantity2 ? <p> {props.quantity2}x tent for 2 </p> : null}
          {props.quantity3 ? <p> {props.quantity3}x tent for 3 </p> : null}
        </div>
        <p className={styles.cartItemPrice}>{total},-DKK</p>
      </div>
    </li>
  );
}

export default CartItemCheckout;
