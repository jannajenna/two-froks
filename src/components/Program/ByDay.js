import styles from "./Filterprogram.module.css";
import YellowButton from "../Buttons/YellowButton";

export default function ByDay() {
    return (
        <div>
            <h5>by day</h5>
            <label for="day">Choose a day</label>
            <select name="day" id="day">
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
