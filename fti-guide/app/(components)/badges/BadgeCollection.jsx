'use client';

import styles from './BadgeCollection.module.css';
import { useEffect, useState } from 'react';
import BadgesOverview from './BadgesOverview';

const getBadgesFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const badgesArray = JSON.parse(localStorage.getItem('collected'));
    console.log('collectedBadgeValues', badgesArray);
    // return badgesArray;
  }
}

export default function BadgeCollection({ allBadges, title, showAmount, selected }) {

  // const [collectedBadgeValues, setCollectedBadgeValues] = useState([]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const badgesArray = JSON.parse(localStorage.getItem('collected'));
  //     setCollectedBadgeValues(badgesArray);
  //     console.log('collectedBadgeValues', badgesArray);
  //   }
  // }, []);

  // const collectedBadgeValues = getBadgesFromLocalStorage();
  // getBadgesFromLocalStorage();
  let collectedBadgeValues = [];

  let collectedBadgesAmount = 0;
  if (collectedBadgeValues) { collectedBadgesAmount = collectedBadgeValues.length }
  const uncollectedBadgesAmount = allBadges.length - collectedBadgesAmount;

  let filteredBadges = [];
  if (collectedBadgeValues) {
    filteredBadges = allBadges.filter(badge => {
      return collectedBadgeValues.includes(badge.slug);
    });
  }

  return (
    <div>
      <h1 className={'title margin ' + styles.title}>{title}</h1>
      <BadgesOverview filteredBadges={filteredBadges} uncollectedBadgesAmount={uncollectedBadgesAmount} selected={selected} />

      {showAmount && (
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
      )}

    </div>
  );
}