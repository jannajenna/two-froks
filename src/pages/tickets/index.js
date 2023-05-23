import Accordion from "@/components/Accordion/Accordion";
import TentAccordion from "@/components/Accordion/TentAccordion";
import { TicketData } from "@/data/ticketData";
import { GreenData } from "@/data/greenData";
import { Hero } from "@/components/Hero/Hero";
import styles from "./Tickets.module.css";
import GreenButton from "@/components/Buttons/GreenButton";
import Head from "next/head";
import Anchor from "@/components/Anchor";

export default function Tickets(props) {
  return (
    <>
      <Head>
        <title>Tickets</title>
      </Head>
      <Hero title="Tickets" />
      <section className={styles.accordions}>
        <div className={styles.accordion}>
          {TicketData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <h2>
          Tents<span className={styles.priceHint}> FROM 299,-/stk</span>
        </h2>
        <div className={styles.accordion}>
          {props.tents.map((tent) => (
            <TentAccordion title={tent.area} content={tent.available} />
          ))}
        </div>
        <h2>Sustainability</h2>
        <div className={styles.accordion}>
          {GreenData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
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
