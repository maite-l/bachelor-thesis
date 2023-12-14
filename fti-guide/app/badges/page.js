
import { getAllBadges } from '../../lib/data';
import BadgeCollection from '../(components)/badges/BadgeCollection';
import styles from './page.module.css';
import dynamic from 'next/dynamic';
const ARFilterNoSSR = dynamic(() => import('../(components)/AR-filter/ARFilter'), { ssr: false });

export default function BadgesPage() {

  const allBadges = getAllBadges();

  return (
    <main>
      {/* <BadgeCollection allBadges={allBadges} /> */}

      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="43" viewBox="0 0 8 43" fill="none" className={styles.arrow}>
        <path d="M3.64645 42.8536C3.84171 43.0488 4.15829 43.0488 4.35355 42.8536L7.53553 39.6716C7.7308 39.4763 7.7308 39.1597 7.53553 38.9645C7.34027 38.7692 7.02369 38.7692 6.82843 38.9645L4 41.7929L1.17157 38.9645C0.976311 38.7692 0.659728 38.7692 0.464466 38.9645C0.269204 39.1597 0.269204 39.4763 0.464466 39.6716L3.64645 42.8536ZM3.5 0V42.5H4.5V0H3.5Z" fill="#6E33D5" />
      </svg>

      <p className={'title margin ' + styles.filterTitle}>Deel je Badges met stijl met coole <em>gezichtsfilters!</em></p>

      <ARFilterNoSSR />
    </main>
  )
}