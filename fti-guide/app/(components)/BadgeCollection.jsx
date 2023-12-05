'use client';

import styles from './BadgeCollection.module.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BadgesOverview from './BadgesOverview';
const ARFilterNoSSR = dynamic(() => import('./ARFilter'), { ssr: false });

export default function BadgeCollection({ allBadges }) {

  const [collectedBadgeValues, setCollectedBadgeValues] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const badgesArray = JSON.parse(localStorage.getItem('collected'));
      setCollectedBadgeValues(badgesArray);
    }
  }, []);

  let collectedBadgesAmount = 0;
  if (collectedBadgeValues) { collectedBadgesAmount = collectedBadgeValues.length }
  const uncollectedBadgesAmount = allBadges.length - collectedBadgesAmount;

  let filteredBadges = [];
  if (collectedBadgeValues) {
    filteredBadges = allBadges.filter(badge => {
      return collectedBadgeValues.includes(badge.location);
    });
  }

  return (
    <div>
      <h1 className={'title margin ' + styles.title}>Jouw badge verzameling</h1>
      <BadgesOverview filteredBadges={filteredBadges} uncollectedBadgesAmount={uncollectedBadgesAmount} />

      <div className={'margin ' + styles.amount}>
        {collectedBadgesAmount <= 0 && (
          <p>Je hebt momenteel nog <em>geen badges</em>. Blijf zoeken naar de RoBob’s! Met een badge krijg je toegang tot een nieuwe <em>gezichtsfilter!</em></p>
        )}
        {collectedBadgesAmount > 0 && collectedBadgesAmount < allBadges.length && (
          <p>Goed bezig! Je hebt al <em>{collectedBadgesAmount}/{allBadges.length} badges</em> verzameld, blijf zo door gaan. Verzamel ze allemaal om toegang tot <em>alle gezichtsfilters</em> te krijgen!</p>
        )}
        {collectedBadgesAmount === allBadges.length && (
          <p>Proficiat, je hebt <em>alle badges</em> verzameld! Je hebt nu toegang tot <em>alle gezichtsfilters</em>, probeer ze eens allemaal uit!</p>
        )}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="43" viewBox="0 0 8 43" fill="none" className={styles.arrow}>
        <path d="M3.64645 42.8536C3.84171 43.0488 4.15829 43.0488 4.35355 42.8536L7.53553 39.6716C7.7308 39.4763 7.7308 39.1597 7.53553 38.9645C7.34027 38.7692 7.02369 38.7692 6.82843 38.9645L4 41.7929L1.17157 38.9645C0.976311 38.7692 0.659728 38.7692 0.464466 38.9645C0.269204 39.1597 0.269204 39.4763 0.464466 39.6716L3.64645 42.8536ZM3.5 0V42.5H4.5V0H3.5Z" fill="#6E33D5" />
      </svg>

      <p className={'title margin ' + styles.filterTitle}>Deel je Badges met stijl met coole <em>gezichtsfilters!</em></p>

      <ARFilterNoSSR />

      </div>
      );
}