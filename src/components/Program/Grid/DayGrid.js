import { useState } from "react";
import { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } from "./Days";

//Array of objects for eacch day/component
const daysOfWeek = [
  { DayComponent: Monday, dayIndex: 0 },
  { DayComponent: Tuesday, dayIndex: 1 },
  { DayComponent: Wednesday, dayIndex: 2 },
  { DayComponent: Thursday, dayIndex: 3 },
  { DayComponent: Friday, dayIndex: 4 },
  { DayComponent: Saturday, dayIndex: 5 },
  { DayComponent: Sunday, dayIndex: 6 },
];

export default function DayGrid({ bands, name, dataStage }) {
  //Accordion days
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(-1);
    }
    setOpen(index);
  };


  return (
    <div>
      <h2>{name}</h2>
      {daysOfWeek.map(({ DayComponent, dayIndex }) => (
        <DayComponent
          key={dayIndex}
          bands={bands}
          open={open === dayIndex}
          toggle={() => toggle(dayIndex)}
          dataStage={dataStage}
        />
      ))}
    </div>
  );
}










/* import { useState } from "react";
import { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } from "./Days"

export default function DayGrid({ bands, name, dataDay }) {

  //Accordion days
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div>
      <h2>{name}</h2>
      <Monday
        bands={bands}
        open={open === 0}
        toggle={() => toggle(0)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay}
      />

      <Tuesday
        bands={bands}
        open={open === 1}
        toggle={() => toggle(1)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

      <Wednesday
        bands={bands}
        open={open === 2}
        toggle={() => toggle(2)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

      <Thursday
        bands={bands}
        open={open === 3}
        toggle={() => toggle(3)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

      <Friday
        bands={bands}
        open={open === 4}
        toggle={() => toggle(4)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

      <Saturday
        bands={bands}
        open={open === 5}
        toggle={() => toggle(5)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

      <Sunday
        bands={bands}
        open={open === 6}
        toggle={() => toggle(6)}
        midgardData={dataDay}
        jotunheimData={dataDay}
        vanaheimData={dataDay} />

    </div>
  );
}

 */