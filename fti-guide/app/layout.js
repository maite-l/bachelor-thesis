'use client'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './(css)/globals.css'
import { createMedia } from "@artsy/fresnel";
import Nav from './(components)/Nav';
import Header from './(components)/Header';
import Desktop from './(components)/Desktop';

const inter = Inter({ subsets: ['latin'] })

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
    desktop: 769,
  }
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>FTI Guide</title>
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
