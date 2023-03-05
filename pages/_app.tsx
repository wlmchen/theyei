import '../styles/globals.css'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from '../components/utility/gtag'
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default App
