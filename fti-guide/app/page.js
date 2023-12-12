import styles from './index.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SmallBadge from './(components)/badges/SmallBadge'
import Marquee from "react-fast-marquee";
import { getAllBadges } from '../lib/data';

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={'margin ' + styles.header}>
        <Image src="/images/home/header.svg" alt="3 RoBobs" width={322} height={216} className={styles.img} />
        <h1 className={'title ' + styles.borderTop}>Vind je persoonlijke begeleider!</h1>
        <p>
          Je hebt misschien al eens een <em>RoBob</em> tegengekomen? Als je hem eens met je <em>smartphone aantikt</em>, zal hij op je scherm tot leven komen om je te helpen!
        </p>
      </section>

      <section className={styles.badges}>
        <h2 className={'margin ' + 'title'}>Verzamel alle badges</h2>
        <Marquee speed={25}>
          <div className={styles.badgesContainer}>
            {getAllBadges().map((badge) => (
              <SmallBadge version={'home'} image={badge.slug} alt={badge.name}/>
            ))}
          </div>
        </Marquee>
        <p className={'margin'}>
          Elke RoBob die je vindt zal je een <em>badge</em> geven als beloning van je vondst en de nieuwe kennis die je hebt opgedaan.
        </p>
        <Link href="/badges" className={'margin ' + styles.button}>
          Bekijk je badges
        </Link>
      </section>


      <section className={'margin ' + styles.navigation}>
        <div className={styles.content}>
          <Image src="/images/home/navBob.svg" alt="Navigatie RoBob" width={155} height={206} className={styles.img} />
          <div className={styles.text}>
            <h2 className={'title '}>Laat RoBob je helpen met <em>ontdekken!</em></h2>
            <p>
              Bij elke ingang van het <em>Buda-eiland</em> is een gespecialiseerde <em>navigatie RoBob</em> te vinden. Door hem simpelweg ook eens aan te tikken met je smartphone, zal hij je ook helpen op pad te brengen.
            </p>
          </div>
        </div>
        <div className={styles.help}>
          <p className={'title '}>Nu hulp nodig?</p>
          <Link href="/navigatie" className={styles.button}>
            Chat met RoBob de Navigator
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
              <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM1 4.5L14 4.5V3.5L1 3.5L1 4.5Z" fill="#FBF3ED" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
