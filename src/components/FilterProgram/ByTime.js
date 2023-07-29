import styles from "./Filterprogram.module.css";
import YellowButton from "../Buttons/YellowButton";

export default function ByTime() {
    return (
        <div>
            <h5>by time</h5>
            <YellowButton name="Day"></YellowButton>
            <YellowButton name="Night"></YellowButton>
        </div>
    );
}
