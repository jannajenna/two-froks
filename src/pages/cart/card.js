import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./Cart.module.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <fieldset className={styles.cardField}>
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <div className={styles.card}>
        <label htmlFor="number">Card number</label>
        <input type="text" name="number" placeholder="Card Number" value={state.number} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label htmlFor="number">Cardholder's name</label>
        <input type="text" name="name" placeholder="Enter Cardholder's name" value={state.name} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label className={styles.expiry} htmlFor="number">
          Expiry
        </label>
        <input className={styles.expiry} type="text" name="expiry" placeholder="Valid Thru" value={state.expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
        <label className={styles.cvcLabel} htmlFor="number">
          CVC
        </label>
        <input className={styles.cvcNumber} type="text" name="cvc" placeholder="CVC" value={state.cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
      </div>
    </fieldset>
  );
};

export default PaymentForm;
