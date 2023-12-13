import { getAllBadges, getBadgeData } from "../../../lib/data";
import React from "react";
import styles from './page.module.css';
import Link from 'next/link';
import Image from "next/image";
import BadgeCollection from "@/app/(components)/badges/BadgeCollection";

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

    return (
        <main className={styles.main}>

            <div className={`margin ` + styles.topBar}>
                <Link href="/badges" className={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                        <path d="M9 1L1 8.82609L9 16" stroke="#6E33D5" strokeLinecap="round" />
                    </svg>
                    alle badges
                </Link>
                <div className={styles.location}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                        <path d="M4.60633 18.5953L4.60543 18.5942C1.89231 15.4139 0.500087 12.1076 0.5 9.03609C0.502588 6.76973 1.38587 4.59895 2.95292 2.99944C4.51957 1.40035 6.64142 0.502717 8.85246 0.5C11.0635 0.502717 13.1854 1.40035 14.752 2.99944C16.3191 4.59901 17.2024 6.7699 17.2049 9.03636C17.2048 12.1076 15.8087 15.4138 13.0993 18.5945L13.0983 18.5956C11.8838 20.0298 10.5171 21.3216 9.02352 22.4474C8.97329 22.4821 8.91512 22.5 8.85648 22.5C8.79778 22.5 8.73954 22.4821 8.68927 22.4472C7.19281 21.3219 5.82338 20.03 4.60633 18.5953ZM8.53946 21.5419L8.85246 21.7932L9.16546 21.5419C10.0135 20.8612 11.8592 19.2716 13.4968 17.0978C15.1298 14.9302 16.5954 12.1292 16.5954 9.0358C16.5954 6.94574 15.782 4.93926 14.3311 3.4583C12.8799 1.97699 10.9094 1.14287 8.85246 1.14287C6.79556 1.14287 4.82504 1.97699 3.37378 3.4583C1.92287 4.93926 1.10954 6.94574 1.10954 9.0358C1.10954 12.1303 2.57506 14.9312 4.20809 17.0986C5.84574 19.2722 7.69148 20.8612 8.53946 21.5419ZM6.89865 6.03388C7.47791 5.63882 8.15782 5.42862 8.85246 5.42862C9.7837 5.42862 10.6789 5.80612 11.3406 6.4815C12.0026 7.15723 12.3763 8.07585 12.3763 9.0358C12.3763 9.75149 12.1683 10.4503 11.7798 11.0438C11.3914 11.6372 10.8404 12.0981 10.1976 12.3698C9.55497 12.6415 8.84845 12.7124 8.16693 12.5741C7.48535 12.4357 6.85784 12.0938 6.36433 11.5901C5.87072 11.0863 5.53344 10.4431 5.3967 9.74144C5.25995 9.03971 5.33022 8.31246 5.59822 7.65207C5.86617 6.99176 6.31928 6.42903 6.89865 6.03388ZM7.22942 11.4979C7.70891 11.8249 8.27375 12.0001 8.85246 12.0001C9.62873 12.0001 10.3711 11.6853 10.9168 11.1282C11.4622 10.5716 11.7668 9.81872 11.7668 9.0358C11.7668 8.45177 11.5971 7.88005 11.2782 7.39286C10.9592 6.90556 10.5048 6.52418 9.97108 6.29855C9.4373 6.07287 8.84933 6.01365 8.28196 6.12884C7.71467 6.24402 7.19501 6.52805 6.78813 6.94336C6.38135 7.35857 6.10545 7.88634 5.99377 8.4594C5.88211 9.03242 5.93933 9.62648 6.15863 10.1669C6.37795 10.7073 6.75005 11.1709 7.22942 11.4979Z" fill="#6E33D5" stroke="#6E33D5" />
                    </svg>
                    <p>{badgeData.location}</p>
                </div>
            </div>


            <div className={`margin ` + styles.badgeOverview}>
                <div>
                    <h1 className={styles.name}>{badgeData.name}</h1>
                    <p>Proficiat, je hebt de {badgeData.world} bereikt!</p>
                </div>
                <div className={styles.badge}>
                    <div className={styles.badgeBackground}>
                        <div className={styles.badgeContainer}>
                            <Image src={`/images/badges/` + badgeData.slug + `.svg`} alt={badgeData.name} width={68} height={68} priority={true} className={styles.badgeImage}/>
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
                <div className={styles.characterImage}>

                </div>

                <div className={styles.descriptionBackground}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                        <path d="M12 1L2 17.5H21.5L12 1Z" fill="#FBF3ED" stroke="#6E33D5" />
                        <rect y="15" width="24" height="4" fill="#FBF3ED" />
                    </svg>
                    <div className={styles.descriptionContainer}>
                        <p>Over de jaren heen hebben games zich ontwikkeld tot meeslepende avonturen met Hollywood-waardige verhalen. Het is als het verschil tussen een 8-bit melodie en een epische filmsoundtrack voor je oren én ogen!</p>
                    </div>
                </div>
            </div>

            <div>
                <BadgeCollection allBadges={getAllBadges()} title={'Bekijk je andere badges'} showAmount={false} />
            </div>

        </main>
    )
}
