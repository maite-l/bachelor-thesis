import { getAllBadges, getBadgeData } from "../../../lib/data";
import React from "react";
import styles from './page.module.css';
import Link from 'next/link';
import Image from "next/image";
import BadgeCollection from "@/app/(components)/badges/BadgeCollection";
import BadgeDetailTopBar from "@/app/(components)/BadgeDetailTopBar";


// generate all possible paths for this route
export async function generateStaticParams() {
    const badges = getAllBadges();
    const paths = badges.map((badge) => ({
        slug: badge.slug,
    }));
    console.log(paths)
    return paths;
}
export const dynamicParams = false; // prevent other routes from being generated


export default async function Badge({ params }) {
    const { slug } = params;
    const badgeData = getBadgeData(slug);

    let description;
    if (badgeData.description) {
        description = (
            <p dangerouslySetInnerHTML={{ __html: badgeData.description }}></p>
        );
    }

    return (
        <main className={styles.main}>

            <BadgeDetailTopBar location={badgeData.location} link={badgeData.mapLink} />

            <div className={`margin ` + styles.badgeOverview}>
                <div>
                    <h1 className={styles.name}>De {badgeData.name}</h1>
                    <p>Proficiat, je hebt de {badgeData.world} bereikt!</p>
                </div>
                <div className={styles.badge}>
                    <div className={styles.badgeBackground}>
                        <div className={styles.badgeContainer}>
                            <Image src={`/images/badges/` + badgeData.slug + `.svg`} alt={badgeData.name} width={68} height={68} priority={true} className={styles.badgeImage} />
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


            <div className="margin">
                <h2 className={`title ` + styles.title}>Je hebt deze badge ontvangen van <em>{badgeData.character}</em></h2>
                <div className={styles.characterImageContainer}>
                    <Image src={`/images/robob_` + badgeData.slug + `.svg`} alt={badgeData.character} width={130} height={160} />
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

            <div>
                <BadgeCollection allBadges={getAllBadges()} title={'Bekijk je andere badges'} showAmount={false} selected={slug}/>
            </div>

        </main>
    )
}
