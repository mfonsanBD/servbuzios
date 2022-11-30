/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import SEO from '../../next-seo.config'

export const SITE_NAME = 'WOOF Bowl Stand'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>WOOF Bowl Stand</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#E1C9AF" />
          <meta
            name="description"
            content="O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes."
          />
        </Head>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
