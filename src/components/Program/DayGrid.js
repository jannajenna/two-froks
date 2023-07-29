import { useState } from "react";
import DayDropDownGrid from "./DayDropDownGrid";



export default function DayGrid() {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const dayWeek = [
        { day: "MONDAY" },
        { day: "TUESDAY" },
        { day: "WEDNESDAY" },
        { day: "THURSDAY" },
        { day: "FRIDAY" },
        { day: "SATURDAY" },
        { day: "SUNDAY" },
    ]

    return (
        <div>
            {dayWeek.map((data, index) => {
                return <DayDropDownGrid key={index} open={index === open} day={data.day} toggle={() => toggle(index)} />
            })}

        </div>
    );
}
