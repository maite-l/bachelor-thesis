'use client';

import styles from './BadgeDetailCharacter.module.css';
import Image from 'next/image';
import { createMedia } from "@artsy/fresnel";


const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 600,
    }
});

export default function BadgeDetailCharacter({ badgeData, description }) {

    return (
        <>
            <MediaContextProvider>
                <Media at="mobile">
                    <div className={styles.mobileContainer}>
                        <div className={styles.characterImageContainer}>
                            <Image src={`/images/talking/` + badgeData.slug + `.gif`} alt={badgeData.character} width={130} height={160} />
                        </div>

                        <div className={styles.descriptionBackground}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                <path d="M12 1L2 17.5H21.5L12 1Z" fill="#FBF3ED" stroke="#6E33D5" />
                                <rect y="15" width="24" height="4" fill="#FBF3ED" />
                            </svg>
                            <div className={styles.descriptionContainer}>
                                {description}
                            </div>
                        </div>
                    </div>

                </Media>
                <Media greaterThanOrEqual="tablet">
                    <div className={styles.tabletContainer}>
                        <div className={styles.descriptionBackground}>
                            <div className={styles.descriptionContainer}>
                                {description}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                                <path d="M26 15L2 2L2 27L26 15Z" fill="#FBF3ED" stroke="#6E33D5" />
                                <rect width="4" height="30" fill="#FBF3ED" />
                            </svg>
                        </div>

                        <div className={styles.characterImageContainer}>
                            <Image src={`/images/talking/` + badgeData.slug + `.gif`} alt={badgeData.character} width={130} height={160} />
                        </div>
                    </div>

                </Media>
            </MediaContextProvider>



        </>
    );
}