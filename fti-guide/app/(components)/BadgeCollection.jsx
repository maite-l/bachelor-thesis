'use client';

import { useEffect, useState } from 'react';
import SmallBadge from './SmallBadge';
import BadgesOverview from './BadgesOverview';

export default function BadgeCollection({ allBadges }) {

  const [collectedBadgeValues, setCollectedBadgeValues] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const badgesArray = JSON.parse(localStorage.getItem('collected'));
      setCollectedBadgeValues(badgesArray);
    }
  }, []);

  const uncollectedBadges = allBadges.length - collectedBadgeValues.length;

  const filteredBadges = allBadges.filter(badge => {
    return collectedBadgeValues.includes(badge.location);
  });

  return (
    <div>
      <BadgesOverview filteredBadges={filteredBadges} uncollectedBadges={uncollectedBadges} />


    </div>
  );
}