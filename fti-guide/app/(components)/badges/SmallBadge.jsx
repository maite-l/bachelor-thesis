import styles from './SmallBadge.module.css';

export default function SmallBadge({ version, name, image }) {

    let badgeStyle;
    if (version === 'collected') {
        badgeStyle = styles.collected;
    } else if (version === 'uncollected') {
        badgeStyle = styles.uncollected;
    } else if (version === 'home') {
        badgeStyle = styles.home;
    } else if (version === 'selected') {
        badgeStyle = styles.selected;
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.badgeContainer} ${badgeStyle}`}>
                {image
                    ? <img src={`/images/badges/${image}.svg`} alt={image} width={80} height={68} className={styles.image} />
                    : null
                }
            </div>
            {name ? <p>{name}</p> : null}
        </div>
    );
}