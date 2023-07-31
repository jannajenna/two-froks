/*
import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

export default function Checkout() {
  const state = useContext(StoreContext);
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Hero title="Cart" />
      <ul>
        {state.basket.map((item) => {
          return (
            <li key={item.name}>
              {item.amount} {item.name} <button>-</button> {item.price},-DKK
            </li>
          );
        })}
        <li>Booking fee: 99,-DKK</li>
      </ul>
    </>
  );
}
*/

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
  // const dispatch = useContext(DispatchContext);
  // const totalPrice = props.price;
  // function addToBasket() {
  //   dispatch({
  //     action: "ADD_PRODUCT",
  //     payload: {
  //       name: props.name,
  //       price: props.price,
  //       quantity: 1,
  //       totalPrice: totalPrice,
  //     },
  //   });
  // }

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Hero title="Cart" />
      <ul className={styles.cartUl}>
        {state.basket.map((item) => {
          return <CartItem {...item} key={item.name} />;
        })}
        <li className="cartBookingFee">Booking fee: 99,-DKK</li>
        <li className="cartTotal">Total: {props.price}</li>
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
