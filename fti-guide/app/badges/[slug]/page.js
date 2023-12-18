import { getAllBadges, getBadgeData } from "../../../lib/data";
import React from "react";
import styles from './page.module.css';
import BadgeCollection from "../../../app/(components)/badges/BadgeCollection";
import BadgeDetailTopBar from "../../../app/(components)/BadgeDetailTopBar";
import BadgeDetailBadge from "../../../app/(components)/BadgeDetailBadge";
import BadgeDetailCharacter from "../../../app/(components)/BadgeDetailCharacter";


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

            <div className="margin">
                <BadgeDetailBadge badgeData={badgeData} />
            </div>

            <div className="margin">
                <h2 className={`title ` + styles.title}>Je hebt deze badge ontvangen van <em>{badgeData.character}</em></h2>
                <BadgeDetailCharacter badgeData={badgeData} description={description} />
            </div>

            <div>
                <BadgeCollection allBadges={getAllBadges()} title={'Bekijk je andere badges'} showAmount={false} selected={slug} />
            </div>

        </main>
    )
}
