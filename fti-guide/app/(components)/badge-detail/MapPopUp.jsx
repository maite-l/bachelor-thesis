import styles from './MapPopUp.module.css';
import { useState } from 'react';

export default function MapPopUp({ links, onClose }) {

    const [activeTabIndex, setActiveTabIndex] = useState(0); // State to track active tab index

    const handleTabClick = (index) => {
        setActiveTabIndex(index); // Update active tab index when a tab is clicked
        document.getElementById('map').src = links[index].mapLink; // Update iframe src
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <button
                        onClick={() => { onClose() }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L1 16L16 1" stroke="#6E33D5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {links.length === 1 &&
                        <div className={styles.map}>
                            <iframe src={links[0]} width='100%' height='100%' style={{ 'border': 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    }
                    {links.length > 1 &&
                        <div className={styles.map}>
                            <div className={styles.tabs}>
                                {links.map((link, index) => {
                                    return (
                                        <button key={index}
                                            onClick={() => handleTabClick(index)}
                                            className={index === activeTabIndex ? `${styles.tab} ${styles.active}` : styles.tab}
                                        >
                                            {link.name}
                                        </button>
                                    );
                                })}
                            </div>
                            <iframe id='map' src={links[0].mapLink} width='100%' height='90%' style={{ 'border': 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                        </div>
                    }


                </div>
            </div>
        </div >
    );
}