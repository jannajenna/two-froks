import { useState } from "react";

//components imported
import Viewmode from "@/components/Program/Viewmode";
import DayGrid from "@/components/Program/DayGrid";

//Filtercomponnts
import ByDay from "./ByDay";
import ByStage from "./ByStage";
import ByTime from "./ByTime";
import styles from "./Filterprogram.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { Collapse } from "react-collapse";



export default function Filterprogram({ data }) {

    //Accordion
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen((prevOpen) => !prevOpen); // Toggle the value of 'open'
    };

    // Filter the data for each realm
    const midgardData = data.Midgard;
    const jotunheimData = data.Jotunheim;
    const vanaheimData = data.Vanaheim

    //console.log('MIDGARD 1:', midgardData);
    //console.log('JOTUNHEIM:', jotunheimData);
    //console.log('VANAHEIM:', vanaheimData);


    return (
        <div >
            <div className={styles.bkg}>
                <div className={styles.accordion} onClick={toggle} >
                    <p>Filter</p>
                    {open ? <BsChevronUp className={styles.icon_size} /> : <BsChevronDown className={styles.icon_size} />}
                </div>
                <Collapse isOpened={open} >
                    <ByStage data={data} />
                    <ByDay />
                    <ByTime />
                    <h5 className={styles.clear}>Clear all</h5>
                </Collapse>
            </div>
            <Viewmode />
            <DayGrid midgardData={midgardData} name="Midgard" />
            <DayGrid jotunheimData={jotunheimData} name="Jotunheim" />
            <DayGrid vanaheimData={vanaheimData} name="Vanaheim" />

        </div>
    );
}
