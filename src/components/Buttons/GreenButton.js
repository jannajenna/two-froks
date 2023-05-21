import styles from "./Buttons.module.css";

function GreenButton(props) {
  return <button className={styles.greenbutton}>{props.name}</button>;
}

export default GreenButton;
