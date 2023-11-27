'use client'

import { Inter } from 'next/font/google'
import './(css)/globals.css'
import { createMedia } from "@artsy/fresnel";
import Nav from './(components)/Nav';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <MediaContextProvider>
          <Media at="mobile" className='mobile'>
            <Nav />
            {children}
          </Media>
          <Media greaterThanOrEqual="desktop" className='desktop'>
            Deze ervaring werkt enkel op smartphones en tablets
          </Media>
        </MediaContextProvider>
      </body>

    </html>
  )
}
