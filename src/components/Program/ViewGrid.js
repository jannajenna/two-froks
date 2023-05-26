import Card from "./Card";
import styles from "./ViewGrid.module.css";


export default function ViewGrid() {
    return (
        <div className={styles.grid_cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    );
}