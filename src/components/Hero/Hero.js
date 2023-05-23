import styles from "./Hero.module.css";
import { Grandstander, Space_Grotesk, Poppins } from "next/font/google";

const grandstander = Grandstander({
  subsets: ["latin"],
  display: "swap",
});

export function Hero(props) {
  return (
    <div className={grandstander.className}>
      <h1 className={styles.headline}>{props.title}</h1>
    </div>
  );
}
