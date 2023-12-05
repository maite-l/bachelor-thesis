
import { getAllBadges } from '../../lib/data';
import BadgeCollection from '../(components)/BadgeCollection';


export default function BadgesPage() {

  const allBadges = getAllBadges();

  return (
    <main>
      <BadgeCollection allBadges={allBadges} />
    </main>
  )
}
