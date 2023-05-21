import Accordion from "@/components/Accordion/Accordion";
import { TicketData } from "@/data/ticketData";
import { TentData } from "@/data/tentData";
import { GreenData } from "@/data/greenData";
import { Hero } from "@/components/Hero/Hero";
import styles from "./Tickets.module.css";
import GreenButton from "@/components/Buttons/GreenButton";

const Tickets = () => {
  return (
    <>
      <Hero title="Tickets" />
      <div className={styles.accordions}>
        <div className={styles.accordion}>
          {TicketData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <h2>
          Tents<span className={styles.priceHint}> FROM 299,-/stk</span>
        </h2>
        <div className={styles.accordion}>
          {TentData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
        <h2>Sustainability</h2>
        <div className={styles.accordion}>
          {GreenData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <GreenButton name="Program" />
        <GreenButton name="Pay now" />
      </div>
    </>
  );
};

export default Tickets;
