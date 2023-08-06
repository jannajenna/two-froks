import { useState } from "react";
import { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } from "./DaysList";

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

    console.log(dataStage)

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
