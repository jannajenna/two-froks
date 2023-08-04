import styles from "./DayDropDown.module.css";

import List from "./List";


export default function DayDropDownList() {


    return (
        <div>
            <div className={styles.flex}>
                <h3 className={styles.color}>Monday</h3>
                <svg className={styles.color} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </div >
            <List />
        </div >
    );
}
