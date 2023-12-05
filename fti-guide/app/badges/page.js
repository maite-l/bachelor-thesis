
import styles from './page.module.css'
import { getAllBadges } from '../../lib/data';
import BadgeCollection from '../(components)/BadgeCollection';


export default function BadgesPage() {

  const allBadges = getAllBadges();

  return (
    <main>
      <h1 className={'title margin ' + styles.title}>Jouw badge verzameling</h1>
      <BadgeCollection allBadges={allBadges} />
    </main>
  )
}
