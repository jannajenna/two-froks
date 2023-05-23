// import Accordion from "@/components/Accordion/Accordion";
// import TentAccordion from "@/components/Accordion/TentAccordion";
import { TicketData } from "@/data/ticketData";
// import { GreenData } from "@/data/greenData";
import { Hero } from "@/components/Hero/Hero";
import styles from "./Tickets.module.css";
import Head from "next/head";
import Anchor from "@/components/Anchor";
import { useState } from "react";
import YellowButton from "@/components/Buttons/YellowButton";

export default function Tickets(props) {
  const [isRegularActive, setIsRegularActive] = useState(false);
  const [isVipActive, setIsVipActive] = useState(false);
  const [isTent1Active, setIsTent1Active] = useState(false);
  const [isTent2Active, setIsTent2Active] = useState(false);
  const [isTent3Active, setIsTent3Active] = useState(false);
  const [isTent4Active, setIsTent4Active] = useState(false);
  const [isTent5Active, setIsTent5Active] = useState(false);
  const [isGreenActive, setIsGreenActive] = useState(false);

  const RegularQuantity = 0;
  const VIPQuantity = 0;
  const Tent_1_2personQuantity = 0;
  const Tent_1_3personQuantity = 0;
  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Hero title="Tickets" />
      <section className={styles.accordions}>
        <div className={styles.accordion}>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsRegularActive(!isRegularActive)}>
              <div>{isRegularActive ? "-" : "+"}</div>
              <h3>{TicketData.regular.name}</h3>
              <h4 className={styles.price}>{TicketData.regular.price},- DKK</h4>
            </div>
            {isRegularActive && (
              <div className={styles.content}>
                {TicketData.regular.description}
                <div className={styles.itemQuantity}>
                  <h4>Quantity:</h4>
                  <button>-</button>
                  <p>{RegularQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsVipActive(!isVipActive)}>
              <div>{isVipActive ? "-" : "+"}</div>
              <h3>{TicketData.vip.name}</h3>
              <h4 className={styles.price}>{TicketData.vip.price},- DKK</h4>
            </div>
            {isVipActive && (
              <div className={styles.content}>
                {TicketData.vip.description}
                <div className={styles.itemQuantity}>
                  <h4>Quantity:</h4>
                  <button>-</button>
                  <p>{VIPQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
        </div>
        <h2>
          Tents<span className={styles.priceHint}> FROM 299,-/stk</span>
        </h2>
        <div className={styles.accordion}>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsTent1Active(!isTent1Active)}>
              <div>{isTent1Active ? "-" : "+"}</div>
              <h3>{TicketData.tent1.name}</h3>
              <h4 className={styles.available}>Available spots: {props.tents[0].available}</h4>
            </div>
            {isTent1Active && (
              <div className={styles.content}>
                {TicketData.tent1.description}
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price2},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_2personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price3},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_3personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsTent2Active(!isTent2Active)}>
              <div>{isTent2Active ? "-" : "+"}</div>
              <h3>{TicketData.tent2.name}</h3>
              <h4 className={styles.available}>Available spots: {props.tents[1].available}</h4>
            </div>
            {isTent2Active && (
              <div className={styles.content}>
                {TicketData.tent2.description}
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price2},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_2personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price3},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_3personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsTent3Active(!isTent3Active)}>
              <div>{isTent3Active ? "-" : "+"}</div>
              <h3>{TicketData.tent3.name}</h3>
              <h4 className={styles.available}>Available spots: {props.tents[2].available}</h4>
            </div>
            {isTent3Active && (
              <div className={styles.content}>
                {TicketData.tent3.description}
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price2},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_2personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price3},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_3personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsTent4Active(!isTent4Active)}>
              <div>{isTent4Active ? "-" : "+"}</div>
              <h3>{TicketData.tent4.name}</h3>
              <h4 className={styles.available}>Available spots: {props.tents[3].available}</h4>
            </div>
            {isTent4Active && (
              <div className={styles.content}>
                {TicketData.tent4.description}
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price2},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_2personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price3},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_3personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
          <article className={styles.item}>
            <div className={styles.title} onClick={() => setIsTent5Active(!isTent5Active)}>
              <div>{isTent5Active ? "-" : "+"}</div>
              <h3>{TicketData.tent5.name}</h3>
              <h4 className={styles.available}>Available spots: {props.tents[4].available}</h4>
            </div>
            {isTent5Active && (
              <div className={styles.content}>
                {TicketData.tent5.description}
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price2},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_2personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.itemQuantity}>
                  <h4>2 person tent: {TicketData.tent1.price3},- DKK</h4>
                  <button>-</button>
                  <p>{Tent_1_3personQuantity}</p>
                  <button>+</button>
                </div>
                <div className={styles.flex}>
                  <YellowButton name="add to cart" />
                </div>
              </div>
            )}
          </article>
        </div>
        <h2>Sustainability</h2>
        <article className={styles.item}>
          <div className={styles.title} onClick={() => setIsGreenActive(!isGreenActive)}>
            <div>{isGreenActive ? "-" : "+"}</div>
            <h3>{TicketData.green.name}</h3>
            <h4 className={styles.price}>{TicketData.green.price},- DKK</h4>
          </div>
          {isGreenActive && (
            <div className={styles.content}>
              {TicketData.green.description}
              <div className={styles.flex}>
                <YellowButton name="add to cart" />
              </div>
            </div>
          )}
        </article>
      </section>
      <section className={styles.buttons}>
        <Anchor className="greenbutton" href="#">
          Program
        </Anchor>
        <Anchor className="greenbutton" href="../cart/checkout">
          Pay Now
        </Anchor>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const api = "https://blush-entertaining-raver.glitch.me/available-spots";
  const res = await fetch(api);
  // If no data - no page (404)
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  // Pass data to the page via props
  return {
    props: {
      tents: data,
    },
  };
}
