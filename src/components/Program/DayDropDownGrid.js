import { Collapse } from "react-collapse";
import styles from "./DayDropDown.module.css";
import ViewGrid from "./ViewGrid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"


export default function DayDropDownGrid({ open, toggle, day }) {


    return (

        <div className={styles.flex}>
            <div className={styles.color} onClick={toggle}>Monday
                <h3>{day}</h3>
                <div>
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div>
                    <ViewGrid />
                </div>
            </Collapse>
        </div >

    );
}
