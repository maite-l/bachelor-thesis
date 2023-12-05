import styles from './BadgesOverview.module.css';

import SmallBadge from './SmallBadge';

export default function BadgesOverview({ filteredBadges, uncollectedBadgesAmount }) {

    return (
        <div className={styles.container}>
            {filteredBadges.map(badge => (
                <SmallBadge key={badge.location} name={badge.name} collected={true} />
            ))}

            {Array.from({ length: uncollectedBadgesAmount }, (_, index) => (
                <SmallBadge key={index} name={'?'} collected={false} />
            ))}

        </div>
    );
}