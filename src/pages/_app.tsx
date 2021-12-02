import '../../styles/index.css'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import NextHeadSeo from 'next-head-seo'
import * as React from 'react'

import * as gtag from '../lib/gtag'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
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
    <SessionProvider session={pageProps.session}>
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
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
