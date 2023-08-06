import { Collapse } from "react-collapse";
import styles from "../ProgramElements.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Card from "./Card";

export default function DayDropDownGrid({ bands, open, toggle, dataStage, day }) {
    //Remove breaks from program
    const onlyBands = dataStage?.filter((band) => band.act !== "break")


    return (

        <div className={styles.flex_column}>
            <div className={`${styles.color_day} ${styles.flex_row}`} onClick={toggle}>
                <h3>{day}</h3>
                <div>
                    {open ? <AiOutlineMinus className={styles.icon_size} /> : <AiOutlinePlus className={styles.icon_size} />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className={styles.grid_cards}>
                    {onlyBands?.map((item) => (
                        <Card key={item.act} data={item} /* name="Midgard" */ />
                    ))}
                </div>
            </Collapse>
        </div >
    );
}

