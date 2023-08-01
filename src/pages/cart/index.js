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
  let total = 0;
  if (state.basket) {
    state.basket.forEach((item) => {
      total += item.price * item.amount;
    });
  }
  let totalAmount = 0;
  if (state.basket) {
    state.basket.forEach((item) => {
      totalAmount += item.amount;
    });
  }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Hero title="Cart" />
      <ul className={styles.cartUl}>
        {state.basket.map((item) => {
          console.log(item);
          return <CartItem {...item} key={item.name} />;
        })}
        <li className="cartBookingFee">Booking fee: 99,-DKK</li>
        <li className="cartTotal">
          Total:
          {totalAmount}
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
    </>
  );
}
