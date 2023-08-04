import { useState } from "react";
import { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } from "./Days"



export default function DayGrid({ midgardData, jotunheimData, vanaheimData, name }) {

    //console.log('MIDGARD 2:', midgardData);

    //Days
    //const midgardMon = midgardData?.mon
    //const jotunheimMon = jotunheimData?.mon
    //const vanaheimMon = vanaheimData?.mon


    //Accordion days
    const [open, setOpen] = useState(null);
    /*  const [open, setOpen] = useState(false);
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
  */

    return (
        <div>
            <h2>{name}</h2>

            <Monday open={open === 0} toggle={() => setOpen((prevOpen) => (prevOpen === 0 ? null : 0))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData}
            />
            <Tuesday open={open === 1} toggle={() => setOpen((prevOpen) => (prevOpen === 1 ? null : 1))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

            <Wednesday open={open === 2} toggle={() => setOpen((prevOpen) => (prevOpen === 2 ? null : 2))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

            <Thursday open={open === 3} toggle={() => setOpen((prevOpen) => (prevOpen === 3 ? null : 3))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

            <Friday open={open === 4} toggle={() => setOpen((prevOpen) => (prevOpen === 4 ? null : 4))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

            <Saturday open={open === 5} toggle={() => setOpen((prevOpen) => (prevOpen === 5 ? null : 5))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

            <Sunday open={open === 6} toggle={() => setOpen((prevOpen) => (prevOpen === 6 ? null : 6))}
                midgardData={midgardData}
                jotunheimData={jotunheimData}
                vanaheimData={vanaheimData} />

        </div>
    );
}


