import ByDay from "./ByDay";
import ByStage from "./ByStage";
import ByTime from "./ByTime";
import styles from "./Filterprogram.module.css";

export default function Filterprogram() {
    return (
        <nav>
            <ByStage />
            <ByDay />
            <ByTime />
            <h5>clear all</h5>
        </nav>
    );
}
