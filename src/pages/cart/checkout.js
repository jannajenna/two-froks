import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { useRef, useState, useContext } from "react";
import Anchor from "@/components/Anchor";
import { StoreContext } from "@/contexts/storeContext";
import CartItemCheckout from "@/components/Cart/CartItemCheckout";
import styles from "./Cart.module.css";
import { Radio } from "antd";
import checkmark from "@/assets/checkmark.svg";
import Image from "next/image";
import PaymentForm from "./card";

function RegularTicketInput() {
  const state = useContext(StoreContext);
  const { basket } = state;

  const renderInputFields = () => {
    return basket.map((item) => {
      const inputFields = [];
      if (item.name === "Regular") {
        for (let i = 0; i < item.quantity; i++) {
          inputFields.push(
            <div className={styles.formField} key={i} index={i}>
              <label htmlFor="regularticketname">Full Name</label>
              <input required type="text" name="regularticketname" id="regularticketname" />
            </div>
          );
        }
      }
      return inputFields;
    });
  };
  return <div>{renderInputFields()}</div>;
}

function VIPTicketInput() {
  const state = useContext(StoreContext);
  const { basket } = state;
  const renderInputFields = () => {
    return basket.map((item) => {
      const inputFields = [];
      if (item.name === "VIP") {
        for (let i = 0; i < item.quantity; i++) {
          inputFields.push(
            <div className={styles.formField} key={i} index={i}>
              <label htmlFor="vipticketname">Full Name</label>
              <input required type="text" name="vipticketname" id="vipticketname" />
            </div>
          );
        }
      }
      return inputFields;
    });
  };
  return <div>{renderInputFields()}</div>;
}

function CheckoutForm(props) {
  const state = useContext(StoreContext);
  const theForm = useRef(null);
  const { basket } = state;
  let bookingFee = 99;
  let total = 0;
  const isRegularIncluded = basket.some((item) => item.name === "Regular");
  const isVIPIncluded = basket.some((item) => item.name === "VIP");
  let idValue;

  for (const item of basket) {
    if (item.id !== undefined) {
      idValue = item.id;
      break;
    }
  }

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
  let totalPlusFee = 0;
  if (total > 0) {
    totalPlusFee = total + bookingFee;
  }

  async function placeOrder() {
    const res = await fetch("https://blush-entertaining-raver.glitch.me/" + "fullfill-reservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: idValue,
      }),
    });
    const order = await res.json();
    console.log("order:", order);
  }

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  function submitted(e) {
    e.preventDefault();
    const payload = {
      billing_name: theForm.current.elements.billing_name.value,
      // vipticketname: vipticketname,
      // regularticketname: regularticketname,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.street.value,
      zip: theForm.current.elements.zip.value,
      country: theForm.current.elements.country.value,
      basket: basket,
      order_id: idValue,
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
      // console.log("Payment Completed? ", paymentCompleted);
    }
  }
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      {paymentCompleted ? (
        <div className={styles.confirmation}>
          <Image src={checkmark.src} width={80} height={80} alt="foofest logo" priority />
          <div>
            <h2>Thank you for your purchase</h2>
            <p>You will receive a confirmation email shortly</p>
          </div>
        </div>
      ) : (
        <div>
          <Hero title="Checkout" />
          <div className={styles.checkoutwrapper}>
            <form onSubmit={submitted} ref={theForm}>
              <div className={styles.formcontrol}>
                <h2>Ticket holders</h2>
                {isRegularIncluded ? (
                  <fieldset>
                    <legend>Regular Ticket</legend>
                    <RegularTicketInput />
                  </fieldset>
                ) : null}
                {isVIPIncluded ? (
                  <fieldset>
                    <legend>VIP Ticket</legend>
                    <VIPTicketInput />
                  </fieldset>
                ) : null}
                <h2>Billing info</h2>
                <fieldset>
                  <label htmlFor="billing_name">Full Name</label>
                  <input required type="text" name="billing_name" id="billing_name" />
                  <label htmlFor="email">Email</label>
                  <input required type="email" name="email" id="email" />
                  <label htmlFor="phone">Phone number</label>
                  <input required type="tel" name="phone" id="phone" />
                  <label htmlFor="street">Address</label>
                  <input required type="text" name="street" id="street" />
                  <label htmlFor="zip">ZIP code</label>
                  <input required type="text" pattern="^[0-9]+$" title="Please enter only numbers" name="zip" id="zip" minLength="4" maxLength="5" />
                  <label htmlFor="country">Country</label>
                  <input required type="text" name="country" id="country" />
                </fieldset>
                <h2>Payment</h2>
                <Radio disabled>bank transfer</Radio>
                <Radio checked>by card</Radio>
                <PaymentForm />
                <button className="greenbutton" type="submit" onClick={placeOrder}>
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
                <li className="checkoutTotal">Total: {totalPlusFee},- DKK</li>
              </ul>
              <Anchor className="greenbutton" href="../cart">
                Edit Cart
              </Anchor>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
