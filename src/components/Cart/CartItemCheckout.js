import styles from "./CartItem.module.css";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

function CartItemCheckout(props) {
  const state = useContext(StoreContext);
  const shouldRenderTitle = props.quantity3 > 0 || props.quantity2 > 0;
  let total = 0;
  return (
    <li className={styles.cartLi}>
      {shouldRenderTitle ? <h4>{props.name} Camping</h4> : null}
      <div className={styles.cartItemCheckout}>
        <div>
          {props.quantity ? (
            <p>
              {props.quantity}x {props.name} Ticket
            </p>
          ) : null}
          {props.quantity2 ? <p> {props.quantity2}x tent for 2 </p> : null}
          {props.quantity3 ? <p> {props.quantity3}x tent for 3 </p> : null}
        </div>
        {props.quantity ? <p className={styles.cartItemPrice}>{props.quantity * props.price},-DKK</p> : null}
        {props.quantity2 ? <p className={styles.cartItemPrice}>{props.quantity2 * props.price2},-DKK</p> : null}
        {props.quantity3 ? <p className={styles.cartItemPrice}>{props.quantity3 * props.price3},-DKK</p> : null}
      </div>
    </li>
  );
}

export default CartItemCheckout;
