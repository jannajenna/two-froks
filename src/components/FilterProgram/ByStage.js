import React from "react";
import YellowButton from "../Buttons/YellowButton";
import styles from "./Filterprogram.module.css";

export default function ByStage({ data, onstageClick }) {
    const stages = Object.keys(data); // Extract the stages from the data object

    const handlestageButtonClick = (stage) => {
        // Call the onstageClick function and pass the selected stage's name
        console.log("Button Clicked:", stage);
        onstageClick(stage);
    };

    return (
        <div className={styles.filters}>
            <h5>by stage</h5>
            <div className={styles.btn_stage}>
                {stages.map((stage) => (
                    <div key={stage}>
                        <YellowButton
                            name={stage}
                            onClick={() => handlestageButtonClick(stage)}
                        ></YellowButton>
                    </div>
                ))}
            </div>
        </div>
    );
}
