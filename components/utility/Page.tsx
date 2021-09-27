import React from 'react'
import Head from 'next/head'
import Navbar from '../global/Header/Navbar'
import Footer from '../global/Footer/Footer'

import { GA_TRACKING_ID } from './gtag'

export default function Page({ fullTitle, title, desc, children }: PageProps) {
  let pageTitle = fullTitle
    ? fullTitle
    : title + ' | Youth Economics Initiative (YEI)'

  return (
    <>
      <Head></Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

type PageProps = {
  fullTitle?: string
  title?: string
  desc?: string
  children?: React.ReactNode
}
