import styles from "./Navbar.module.css";
import Anchor from "../Anchor";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Anchor className="navlink" href="#">
        FooFest{" "}
      </Anchor>
      <Anchor className="navlink" href="#">
        Program
      </Anchor>
      <Anchor className="navlink" href="#">
        About
      </Anchor>
      <Anchor className="navlink" href="#">
        Press
      </Anchor>
      <Anchor className="yellowbutton" href="../cart">
        Cart: 0
      </Anchor>
    </nav>
  );
}
