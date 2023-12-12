import { getAllBadges, getBadgeData } from "../../../lib/data";
import React from "react";
import styles from './page.module.css';

// generate all possible paths for this route
export async function generateStaticParams() {
    const badges = getAllBadges();
    const paths = badges.map((badge) => ({
        params: {
            slug: badge.slug,
        },
    }));
    return paths;
}
export const dynamicParams = false; // prevent other routes from being generated


export default async function Badge({ params }) {
    const { slug } = params;

    return (
        <main>
            <p>{slug}</p>
        </main>
    )
}