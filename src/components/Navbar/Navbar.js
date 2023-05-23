import styles from "./Navbar.module.css";
import YellowButton from "../Buttons/YellowButton";
import Anchor from "../Anchor";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a>FooFest</a>
      <a>Program</a>
      <a>About</a>
      <a>Press</a>
      <Anchor className="yellowbutton" href="../cart">
        Cart: 0
      </Anchor>
    </nav>
  );
}
