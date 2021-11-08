import '../../styles/index.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// import Head from 'next/head'
import { Provider } from 'next-auth/client'
import NextHeadSeo from 'next-head-seo'
import * as React from 'react'
// import 'video.js/dist/video-js.css'
import { GlobalStyles } from 'twin.macro'

import * as gtag from '../lib/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  React.useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRouteChange = (path: any) => {
      gtag.pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Provider session={pageProps.session}>
      <head>
        <NextHeadSeo
          title="casaub0n blog"
          description="This is casaub0n blog."
          canonical="https://casaub0n.dev"
          og={{
            title: "casaub0n blog"
          }}
        />
      </head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
