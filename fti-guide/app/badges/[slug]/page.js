import { getAllBadges, getAllLocationSlugs, getLocationData } from "../../../lib/data";
import React from "react";
import styles from './page.module.css';
import BadgeCollection from "../../../app/(components)/badges/BadgeCollection";
import BadgeDetailTopBar from "../../(components)/badge-detail/TopBar";
import BadgeDetailBadge from "../../(components)/badge-detail/BadgeInfo";
import BadgeDetailCharacter from "../../(components)/badge-detail/Character";


// generate all possible paths for this route
export async function generateStaticParams() {
    const paths = getAllLocationSlugs();
    return paths;
}
export const dynamicParams = false; // prevent other routes from being generated


export default async function Badge({ params }) {
    const { slug } = params;
    const data = getLocationData(slug);
    const location = data.location;
    const maps = data.mapLink;
    const name = data.characterName;
    let fact;
    if (data.fact) {
        fact = (
            <p dangerouslySetInnerHTML={{ __html: data.fact }}></p>
        );
    }
    const badgeData = {
        name: data.badgeName,
        world: data.world,
    }

    return (
        <main className={styles.main}>

            <BadgeDetailTopBar location={location} links={maps} />

            <div className="margin">
                <BadgeDetailBadge badgeData={badgeData} slug={slug} />
            </div>

            <div className="margin">
                <h2 className={`title ` + styles.title}>Je hebt deze badge ontvangen van <em>{name}</em></h2>
                <BadgeDetailCharacter fact={fact} slug={slug} name={name} />
            </div>

            <div>
                <BadgeCollection allBadges={getAllBadges()} title={'Bekijk je andere badges'} showAmount={false} selected={slug} />
            </div>

        </main>
    )
}
