import styles from './MapPopUp.module.css';

export default function MapPopUp({ link, onClose }) {
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
                    <div className={styles.map}>
                        <iframe src={link} width='100%' height='100%' style={{ 'border': 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
                    </div>

                </div>
            </div>
        </div >
    );
}