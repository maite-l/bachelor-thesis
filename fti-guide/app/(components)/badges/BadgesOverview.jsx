import styles from './BadgesOverview.module.css';
import Link from 'next/link';

import SmallBadge from './SmallBadge';

export default function BadgesOverview({ filteredBadges, uncollectedBadgesAmount }) {

    console.log(filteredBadges);
    console.log(uncollectedBadgesAmount);

    return (
        <div className={styles.container}>
            {filteredBadges.map(badge => (
                <Link key={badge.slug} href={`/badges/${badge.slug}`}>
                    <SmallBadge key={badge.slug} name={badge.name} version={'collected'} className={styles.badge} image={badge.slug}/>
                </Link>
            ))}

            {Array.from({ length: uncollectedBadgesAmount }, (_, index) => (
                <SmallBadge key={index} name={'?'} version={'uncollected'} />
            ))}

        </div>
    );
}