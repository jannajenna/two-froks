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
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";
import CartItem from "@/components/Cart/CartItem";
import Anchor from "@/components/Anchor";

export default function Cart() {
  const state = useContext(StoreContext);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Hero title="Cart" />
      <ul>
        {state.basket.map((item) => {
          return <CartItem {...item} key={item.name} />;
        })}
        <li>Booking fee: 99,-DKK</li>
      </ul>
      <Anchor className="greenbutton" href="../cart/checkout">
        Pay Now
      </Anchor>
    </>
  );
}
