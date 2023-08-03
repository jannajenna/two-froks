import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { useRef, useState, useContext } from "react";
import Anchor from "@/components/Anchor";
import { StoreContext } from "@/contexts/storeContext";
import CartItemCheckout from "@/components/Cart/CartItemCheckout";
import styles from "./Cart.module.css";
import { Radio } from "antd";

function CheckoutForm(props) {
  const state = useContext(StoreContext);
  const theForm = useRef(null);
  const { basket } = state;
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
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  function submitted(e) {
    e.preventDefault();
    const payload = {
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      // address: theForm.current.elements.address.value,
      basket: basket,
    };
    fetch("/api/add-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    if (submitted) {
      setPaymentCompleted(true);
      console.log("Payment Completed? ", paymentCompleted);
    }
  }
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Hero title="Checkout" />
      {paymentCompleted ? (
        <div className={styles.confirmation}>
          <h2>Thank you for your purchase</h2>
          <p>You will receive a confirmation email shortly</p>
        </div>
      ) : (
        <div className={styles.checkoutwrapper}>
          <form onSubmit={submitted} ref={theForm}>
            <div className={styles.formcontrol}>
              {/* <h2>Ticket holders</h2>
              <fieldset>
                <legend>Regular Ticket</legend>
                <label htmlFor="form-name">Full Name</label>
                <input required type="text" name="name" id="form-name" />
              </fieldset>
              <fieldset>
                <legend>VIP Ticket</legend>
                <label htmlFor="form-name">Full Name</label>
                <input required type="text" name="name" id="form-name" />
              </fieldset> */}
              <h2>Billing info</h2>
              <fieldset>
                <label htmlFor="name">Full Name</label>
                <input required type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" />
                {/* <label htmlFor="form-phone">Phone number</label>
                <input required type="number" name="phone" id="form-phone" />
                <label htmlFor="form-street">Street and number</label>
                <input required type="text" name="street" id="form-street" />
                <label htmlFor="form-zip">ZIP code</label>
                <input required type="text" name="zip" id="form-zip" />
                <label htmlFor="form-street">Country</label>
                <input required type="text" name="country" id="form-country" /> */}
              </fieldset>
              {/* <h2>Payment</h2>
              <Radio checked>By Card</Radio>
              <fieldset>
                <label for="CC_number">Credit card number</label>
                <input type="number" minlength="16" maxlength="16" name="CC_number" id="CC_number" required />
                <label htmlFor="form-name">Name on a card</label>
                <input required type="text" name="name" id="form-name" />
                <label for="cvv">CVV</label>
                <input type="text" minlength="3" maxlength="3" name="cvv" id="cvv" required />
                <label for="expiring">Date of expiration</label>
                <input type="month" name="expiring" id="expiring" required />
              </fieldset> */}
              <button className="greenbutton" type="submit">
                Confirm and Pay
              </button>
            </div>
          </form>
          <aside className={styles.checkoutCart}>
            <h2 className={styles.h2CheckoutCart}>Cart</h2>
            <ul>
              {basket.map((item) => {
                return <CartItemCheckout {...item} key={item.name} />;
              })}
              <li className="checkoutBookingFee">Booking fee: {bookingFee},- DKK</li>
              <li className="checkoutTotal">Total: {total + bookingFee},- DKK</li>
            </ul>
            <Anchor className="greenbutton" href="../cart">
              Edit Cart
            </Anchor>
          </aside>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
