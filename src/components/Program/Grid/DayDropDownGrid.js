import { Collapse } from "react-collapse";
import styles from "../ProgramElements.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Card from "./Card";

export default function DayDropDownGrid({ bands, open, toggle, bandDataM, bandDataJ, bandDataV, day }) {

    //Remove breaks from program
    const onlyBandsM = bandDataM?.filter((band) => band.act !== "break");
    const onlyBandsJ = bandDataJ?.filter((band) => band.act !== "break");
    const onlyBandsV = bandDataV?.filter((band) => band.act !== "break");

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

                    {onlyBandsM?.map((item) => (
                        <Card key={item.act} data={item} name="Midgard" />
                    ))}
                    {onlyBandsJ?.map((item) => (
                        <Card key={item.act} data={item} name="Jotunheim" />
                    ))}
                    {onlyBandsV?.map((item) => (
                        <Card key={item.act} data={item} name="Vanaheim" />
                    ))}
                </div>
            </Collapse>
        </div >
    );
}

{/* <Collapse isOpened={open}>
                <div className={styles.grid_cards}>

                    {onlyBandsM?.map((item) => (
                        <Card key={item.act} data={item} name="Midgard" bands={bands} />
                    ))}
                </div>
            </Collapse>
            <Collapse isOpened={open}>
                <div className={styles.grid_cards}>
                    {onlyBandsJ?.map((item) => (
                        <Card key={item.act} data={item} name="Jotunheim" bands={bands} />
                    ))}
                </div>
            </Collapse>
            <Collapse isOpened={open}>
                <div className={styles.grid_cards}>
                    {onlyBandsV?.map((item) => (
                        <Card key={item.act} data={item} name="Vanaheim" bands={bands} />
                    ))}
                </div>
            </Collapse> */}