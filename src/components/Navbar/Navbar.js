import styles from "./Navbar.module.css";
import YellowButton from "../YellowButton";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a>FooFest</a>
      <a>Program</a>
      <a>About</a>
      <a>Press</a>
      <YellowButton name="cart: 0" />
    </nav>
  );
}
