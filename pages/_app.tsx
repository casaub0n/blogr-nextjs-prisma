import * as React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
// import 'video.js/dist/video-js.css'
import { GlobalStyles } from 'twin.macro'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  React.useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path: any) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>practice css</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
