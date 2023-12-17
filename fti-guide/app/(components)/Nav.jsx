import { usePathname } from 'next/navigation'
import Link from "next/link";
import styles from './Nav.module.css';

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>  <Link href="/" className={`${pathname === '/' ? styles.active : ''} ${styles.navListItem}`}>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 9.42857L10.5 0L21 9.42857V22H0V9.42857Z" fill={pathname === '/' ? "#F27361" : "#6E33D5"} />
                    </svg>
                    Home
                </Link></li>
                <li><Link href="/badges" className={`${pathname.startsWith('/badges') ? styles.active : ''} ${styles.navListItem}`}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 22.3683L8.49371 25.9759L7.32556 20.271L1.58991 20.0935L4.30617 14.9606L0.0249023 11.0809L5.35497 8.922L4.53114 3.15552L9.98083 4.98062L13 0.0254669L16.0193 4.98062L21.469 3.15552L20.6452 8.922L25.9753 11.0809L21.6937 14.9606L24.4103 20.0935L18.6746 20.271L17.5062 25.9759L13 22.3683Z" fill={pathname.startsWith('/badges') ? "#F27361" : "#6E33D5"} />
                    </svg>
                    Badges
                </Link></li>
                <li><Link href="/navigatie" className={`${pathname === '/navigatie' ? styles.active : ''} ${styles.navListItem}`}>
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00835906 9.5C-0.238002 15.4479 5.00836 20 9.51204 24.6492C14.5084 19.5 19.3865 15.3249 19.5084 9.5C19.602 5.02406 15.6936 -6.92316e-05 9.51204 0C3.57549 6.64894e-05 0.193344 5.03391 0.00835906 9.5Z" fill={pathname === '/navigatie' ? "#F27361" : "#6E33D5"} />
                        <circle cx="9.68098" cy="9.67137" r="3.77937" fill="#FBF3ED" stroke={pathname === '/navigatie' ? "#F27361" : "#6E33D5"} />
                    </svg>
                    Ontdek
                </Link></li>
            </ul>
        </nav>
    );
}