import styles from "./ProgramElements.module.css";
import { FaListUl } from "react-icons/fa"
import { BsFillGridFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"

export default function Viewmode() {
    return (
        <div className={`${styles.color_icon} ${styles.flex_row}`}>
            <FaListUl className={styles.icon_size} />
            <BsFillGridFill className={styles.icon_size} />
            <AiFillStar className={styles.icon_size} />
        </div>
    );
}
