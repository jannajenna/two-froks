import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a>FooFest</a>
      <a>Program</a>
      <a>About</a>
      <a>Press</a>
      <button>tickets</button>
    </nav>
  );
}
