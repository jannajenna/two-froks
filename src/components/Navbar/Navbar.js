import styles from "./Navbar.module.css";
import Anchor from "../Anchor";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

export function Navbar() {
  const state = useContext(StoreContext);
  const { basket } = state;
  let bookingFee = 99;
  let total = 0;
  if (basket) {
    basket.forEach((item) => {
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
  let totalPlusFee = 0;
  if (total > 0) {
    totalPlusFee = total + bookingFee;
  }
  return (
    <nav className={styles.navbar}>
      <Anchor className="navlink" href="#">
        FooFest{" "}
      </Anchor>
      <Anchor className="navlink" href="#">
        Program
      </Anchor>
      <Anchor className="navlink" href="#">
        About
      </Anchor>
      <Anchor className="navlink" href="#">
        Press
      </Anchor>
      <Anchor className="yellowbutton" href="../cart">
        Cart: {totalPlusFee}
      </Anchor>
    </nav>
  );
}
