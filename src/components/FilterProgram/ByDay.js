import styles from "./Filterprogram.module.css";

export default function ByDay() {
    return (
        <div className={styles.filters}>
            <h5>by day</h5>
            <select name="day" id="day" className={styles.custom_select}>
                <option value="all_days">All days</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
            </select>
        </div>
    );
}
