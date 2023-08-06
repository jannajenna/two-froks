import styles from "./ProgramElements.module.css";
import { FaListUl } from "react-icons/fa"
import { BsFillGridFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import Link from 'next/link'

export default function Viewmode() {
    return (
        <div className={styles.flex_row_icons}>
            <Link href="/program/list" className={styles.color_icon}>
                <FaListUl className={styles.icon_size} />
            </Link>
            <Link href="/program" className={styles.color_icon}>
                <BsFillGridFill className={styles.icon_size} />
            </Link>
            <AiFillStar className={`${styles.icon_size} ${styles.icon_list}`} />
        </div>
    );
}
