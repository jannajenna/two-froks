import styles from "./Buttons.module.css";

function YellowButton({ name, onClick }) {
  return <button className={styles.yellowbutton} onClick={onClick}>{name}</button>;
}

export default YellowButton;
