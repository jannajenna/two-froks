import styles from "./Hero.module.css";

export function Hero(props) {
  return <h1 className={styles.headline}>{props.title}</h1>;
}
