import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";
import { DispatchContext } from "@/contexts/storeContext";
import CartItem from "@/components/Cart/CartItem";
import Anchor from "@/components/Anchor";
import styles from "./Cart.module.css";

export default function Cart(props) {
  const state = useContext(StoreContext);
  let bookingFee = 99;
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
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Hero title="Cart" />
      {state.basket.length > 0 ? (
        <div>
          <ul className={styles.cartUl}>
            {state.basket.map((item) => {
              return <CartItem {...item} key={item.name} />;
            })}
            <li className="cartBookingFee">Booking fee: {bookingFee},-DKK</li>
            <li className="cartTotal">
              Total:
              {total + bookingFee}
              ,-DKK
            </li>
          </ul>
          <div className={styles.cartButtons}>
            <Anchor className="greenbutton" href="../tickets">
              Tickets
            </Anchor>
            <Anchor className="greenbutton" href="../cart/checkout">
              Checkout
            </Anchor>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <h3>Your Cart is empty</h3>
          <Anchor className="greenbutton" href="../tickets">
            Tickets
          </Anchor>
        </div>
      )}
    </>
  );
}
