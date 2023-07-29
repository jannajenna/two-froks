import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
("use client");

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
    <li>
      {props.amount} {props.name} <button onClick={removeOne}>-</button> {props.price},-DKK
    </li>
  );
}

export default CartItem;
