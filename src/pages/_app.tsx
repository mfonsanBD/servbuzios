import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

import SEO from '../../next-seo.config'

export const SITE_NAME = 'Woof Bowl Stand'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Woof Bowl Stand :: O Comedouro Postural do seu Pet.</title>
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
    </ThemeProvider>
  )
}

export default App
