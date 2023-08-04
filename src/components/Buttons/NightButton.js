import styles from "./Buttons.module.css";
import { BiMoon } from "react-icons/bi"

function YellowButton(props) {
    return <button className={`${styles.yellowbutton} ${styles.day}`}>
        < BiMoon className={styles.icon_size} />{props.name}</button>;
}

export default YellowButton;


