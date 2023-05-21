import styles from "./Buttons.module.css";

function YellowButton(props) {
  return <button className={styles.yellowbutton}>{props.name}</button>;
}

export default YellowButton;
