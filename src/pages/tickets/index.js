import { TicketData } from "@/data/ticketData";
import { Hero } from "@/components/Hero/Hero";
import styles from "./Tickets.module.css";
import Head from "next/head";
import Anchor from "@/components/Anchor";
import TicketAccordion from "@/components/Accordion/TicketAccordion";
import TentAccordion from "@/components/Accordion/TentAccordion";
import GreenAccordion from "@/components/Accordion/GreenAccordion";

export default function Tickets(props) {
  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Hero title="Tickets" />
      <section className={styles.accordions}>
        <div className={styles.accordion}>
          <TicketAccordion name={TicketData.regular.name} price={TicketData.regular.price} description={TicketData.regular.description} />
          <TicketAccordion name={TicketData.vip.name} price={TicketData.vip.price} description={TicketData.vip.description} />
        </div>
        <h2>
          Tents<span className={styles.priceHint}> FROM 299,-/stk</span>
        </h2>
        <div className={styles.accordion}>
          <TentAccordion name={TicketData.tent1.name} price2={TicketData.tent1.price.for2} price3={TicketData.tent1.price.for3} description={TicketData.tent1.description} available={props.tents[0].available} />
          <TentAccordion name={TicketData.tent2.name} price2={TicketData.tent2.price.for2} price3={TicketData.tent2.price.for3} description={TicketData.tent2.description} available={props.tents[1].available} />
          <TentAccordion name={TicketData.tent3.name} price2={TicketData.tent3.price.for2} price3={TicketData.tent3.price.for3} description={TicketData.tent3.description} available={props.tents[2].available} />
          <TentAccordion name={TicketData.tent4.name} price2={TicketData.tent4.price.for2} price3={TicketData.tent4.price.for3} description={TicketData.tent4.description} available={props.tents[3].available} />
          <TentAccordion name={TicketData.tent5.name} price2={TicketData.tent5.price.for2} price3={TicketData.tent5.price.for3} description={TicketData.tent5.description} available={props.tents[4].available} />
        </div>
        <h2>Sustainability</h2>
        <GreenAccordion name={TicketData.green.name} price={TicketData.green.price} description={TicketData.green.description} />
        <h5>Booking fee: 99,-DKK</h5>
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
