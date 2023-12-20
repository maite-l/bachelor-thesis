import styles from './BadgePopUp.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function BadgePopUp({ onClose, badgeName, slug }) {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.congrats}>
                        <p>Proficiat!</p>
                        <p>Je hebt een gloednieuw badge gekregen.</p>
                    </div>
                    <p className={'title ' + styles.name}>{badgeName}</p>
                    <div className={styles.badgeBackground}>
                        <div className={styles.badgeContainer}>
                            <Image src={`/images/badges/` + slug + `.svg`} alt={badgeName} width={71} height={61} />
                        </div>
                    </div>
                    <Link href={`/badges/` + slug} className={styles.primaryButton}>Bekijk nieuwe badge</Link>
                    <button className={styles.secondaryButton} onClick={() => { onClose() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                            <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM14 6.75C14.4142 6.75 14.75 6.41421 14.75 6C14.75 5.58579 14.4142 5.25 14 5.25V6.75ZM1 6.75L14 6.75V5.25L1 5.25L1 6.75Z" fill="#6E33D5" />
                        </svg>
                        Terug naar chat
                    </button>
                </div>

            </div>
        </div>
    );
}