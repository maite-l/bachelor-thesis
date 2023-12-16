import styles from "./error.module.css";
import Link from "next/link";

export default function NotFound() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Oeps!</h1>
            <p>Het lijkt erop dat RoBob zelf even verdwaald is.</p>
            <Link className={styles.button} href="/">Terug naar de homepage</Link>
        </div>
    );
}
