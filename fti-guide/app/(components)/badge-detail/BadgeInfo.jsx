'use client';

import styles from './BadgeInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { createMedia } from "@artsy/fresnel";


const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 600,
    }
});

export default function BadgeDetailBadge({ badgeData, slug }) {
    return (
        <>
            <MediaContextProvider>

                <Media at="mobile">
                    <div className={styles.containerMobile}>
                        <div>
                            <h1 className={styles.name}>De {badgeData.name}</h1>
                            <p>Proficiat, je hebt de {badgeData.world} bereikt!</p>
                        </div>
                        <div className={styles.badge}>
                            <div className={styles.badgeBackground}>
                                <div className={styles.badgeContainer}>
                                    <Image src={`/images/badges/` + slug + `.svg`} alt={badgeData.name} width={68} height={68} priority={true} className={styles.badgeImage} />
                                </div>
                            </div>
                            <Link
                                href="/badges"
                                className={styles.button}
                            >
                                Neem een foto met je badge!
                            </Link>
                        </div>
                    </div>
                </Media>

                <Media greaterThanOrEqual="tablet">

                    <div className={styles.containerTablet}>
                        <div className={styles.badgeBackground}>
                            <div className={styles.badgeContainer}>
                                <Image src={`/images/badges/` + slug + `.svg`} alt={badgeData.name} width={68} height={68} priority={true} className={styles.badgeImage} />
                            </div>
                        </div>

                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <h1 className={styles.name}>De {badgeData.name}</h1>
                                <p>Proficiat, je hebt de {badgeData.world} bereikt!</p>
                            </div>
                            <Link
                                href="/badges"
                                className={styles.button}
                            >
                                Neem een foto met je badge!
                            </Link>
                        </div>
                    </div>
                </Media>

            </MediaContextProvider>

        </>
    );
}