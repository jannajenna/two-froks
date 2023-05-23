import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Hero title="Checkout" />
    </>
  );
}
