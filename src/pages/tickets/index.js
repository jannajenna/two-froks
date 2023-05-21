import Accordion from "@/components/Accordion/Accordion";
import { TicketData } from "@/data/ticketData";
import { TentData } from "@/data/tentData";
import { GreenData } from "@/data/greenData";

const Tickets = () => {
  return (
    <div>
      <h1>Tickets</h1>
      <div className="accordion">
        {TicketData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <h2>Tents</h2>
      <div className="accordion">
        {TentData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <h2>Sustainability</h2>
      <div className="accordion">
        {GreenData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
