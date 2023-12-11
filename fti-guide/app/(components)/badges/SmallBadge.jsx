import styles from './SmallBadge.module.css';

export default function SmallBadge({ collected, name }) {

    return (
        <div className={styles.container}>
            <div className={`${styles.badgeContainer} ${collected ? styles.collected : styles.uncollected}`}></div>
            {name ? <p>{name}</p> : null}
        </div>
    );
}