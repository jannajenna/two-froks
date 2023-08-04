import styles from "./Buttons.module.css";
import { BiSun } from "react-icons/bi"

function YellowButton(props) {
    return <button className={`${styles.yellowbutton} ${styles.day}`}>
        < BiSun className={styles.icon_size} />{props.name}</button>;
}

export default YellowButton;
