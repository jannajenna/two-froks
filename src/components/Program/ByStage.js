import YellowButton from "../Buttons/YellowButton";
import styles from "./Filterprogram.module.css";

export default function ByStage() {
    return (
        <nav>
            <h5>by stage</h5>
            <div>
                <YellowButton name="Midgard"></YellowButton>
                <YellowButton name="Vanheim"></YellowButton>
                <YellowButton name="Jotuheim"></YellowButton>
            </div>
        </nav>
    );
}
