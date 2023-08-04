import YellowButton from "../Buttons/YellowButton";
import styles from "./Filterprogram.module.css";

export default function ByStage({ data }) {
    const stages = Object.keys(data); // Extract the realms from the data object

    return (
        <div className={styles.filters}>
            <h5>by stage</h5>
            <div className={styles.btn_stage}>
                {stages.map((stage) => (
                    <div key={stage}>
                        <YellowButton name={stage}></YellowButton>
                    </div>
                ))}
            </div>
        </div>
    );
}

