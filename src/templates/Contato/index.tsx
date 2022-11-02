import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import TitleArea from 'components/TitleArea'

import * as S from './styles'

import { SITE_NAME } from 'pages/_app'

const ContatoTemplate = () => (
  <Base>
    <NextSeo
      title={`${SITE_NAME} :: Entre em Contato`}
      description="Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo"
      canonical={`https://woofbowlstand.com.br/contato`}
      openGraph={{
        url: `https://woofbowlstand.com.br/contato`,
        title: `${SITE_NAME} :: Entre em Contato`,
        description:
          'Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo'
      }}
    />

    <TitleArea title="Contato" />
  </Base>
)

export default ContatoTemplate
