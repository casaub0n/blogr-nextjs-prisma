import '../../styles/index.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import NextHeadSeo from 'next-head-seo'
import * as React from 'react'

import * as gtag from '../lib/gtag'

type Props = {
  session: Session
}

const MyApp: React.FC<AppProps<Props>> = ({ Component, pageProps }) => {
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
      <Head>
        <NextHeadSeo
          title="casaub0n blog"
          description="This is casaub0n blog."
          canonical="https://www.casaub0n.dev"
          og={{
            title: "casaub0n blog"
          }}
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
