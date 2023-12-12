import styles from './SmallBadge.module.css';
import Image from 'next/image';

export default function SmallBadge({ version, name, image }) {

    let badgeStyle;
    if (version === 'collected') {
        badgeStyle = styles.collected;
    } else if (version === 'uncollected') {
        badgeStyle = styles.uncollected;
    } else if (version === 'home') {
        badgeStyle = styles.home;
    } 


    return (
        <div className={styles.container}>
            <div className={`${styles.badgeContainer} ${badgeStyle}`}>
                {image
                    ? <Image src={`/images/badges/${image}.svg`} alt={name} width={80} height={68} className={styles.image}/>
                    : null
                }
            </div>
            {name ? <p>{name}</p> : null}
        </div>
    );
}