import styles from "./CartItem.module.css";

function CartItemCheckout(props) {
  return (
    <li className={styles.cartItemCheckout}>
      <p> {props.name}</p>
      <p> {props.amount}</p>
      <p className={styles.cartItemPrice}>{props.price},-DKK</p>
    </li>
  );
}

export default CartItemCheckout;
