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
              {item.amount} {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
