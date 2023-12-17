'use client'

import localFont from 'next/font/local'
import './(css)/globals.css'
import { createMedia } from "@artsy/fresnel";
import Nav from './(components)/Nav';
import Header from './(components)/Header';
import Desktop from './(components)/Desktop';

const GTSuper = localFont({
  src: '../public/fonts/GT-Super-Text-Book.woff2',
  variable: '--font-gt-super',
})
const Lausanne = localFont({
  src: '../public/fonts/Lausanne-Regular.woff2',
  variable: '--font-lausanne',
})

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    desktop: 821,
  }
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/apple-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/favicon-16x16.png"></link>
        <link rel="manifest" href="2fe7b9dfb30166a88281cf320b1b3c46.ico/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="2fe7b9dfb30166a88281cf320b1b3c46.ico/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#F27361"></meta>
        <title>RoBob - Jouw gids op FTI Kortrijk</title>
      </head>
      <body className={`${Lausanne.className} ${GTSuper.variable}`}>
        <MediaContextProvider>
          <Media at="mobile" className='mobile'>
            <Header />
            <Nav />
            {children}
          </Media>
          <Media greaterThanOrEqual="desktop" className='desktop'>
            <Desktop />
          </Media>
        </MediaContextProvider>
      </body>

    </html>
  )
}
