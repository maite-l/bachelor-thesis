import styles from './BadgePopUp.module.css';
import BigBadge from './BigBadge';
import Link from 'next/link';

export default function BadgePopUp({ badge }) {

    console.log(badge);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.congrats}>
                        <p>Proficiat!</p>
                        <p>Je hebt een gloednieuw badge gekregen.</p>
                    </div>
                    <p className={styles.name}>{badge.name}</p>
                    <BigBadge />
                    <Link href="/badges" className={styles.button}>Ontvang badge</Link>
                </div>

            </div>
        </div>
    );
}