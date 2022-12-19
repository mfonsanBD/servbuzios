/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import SEO from '../../next-seo.config'

export const SITE_NAME = 'ServBúzios'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ServBúzios</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F4665" />
        <meta
          name="description"
          content="O sindicato tem como objetivo negociar e buscar a organização coletiva, intervir legalmente em ações judiciais e participar da elaboração da legislação laboral, tratando dos problemas coletivos que surgem decorrentes do exercício da profissão."
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color={theme.colors.tertiary}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
