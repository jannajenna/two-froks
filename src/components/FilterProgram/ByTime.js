import styles from "./Filterprogram.module.css";

import DayButton from "../Buttons/DayButton"
import NightButton from "../Buttons/NightButton"


export default function ByTime() {
    return (
        <div className={styles.filters}>
            <h5>by time</h5>
            <div className={styles.btn_time}>
                <DayButton name="Day"></DayButton>
                <NightButton name="Night"></NightButton>

            </div>

        </div>
    );
}
