import styles from "./CartItem.module.css";
import TicketItem from "./TicketItem";
import TentItem from "./TentItem";

function CartItem(props) {
  const validNames = ["Regular", "VIP", "Green Camping"];
  let isTicket = true;
  if (validNames.includes(props.name)) {
    isTicket = true;
  } else {
    isTicket = false;
  }
  console.log("Cart item props", props);
  return (
    <li className={styles.cartLi}>
      <div>{isTicket ? <TicketItem {...props} /> : <TentItem {...props} />}</div>
    </li>
  );
}

export default CartItem;
