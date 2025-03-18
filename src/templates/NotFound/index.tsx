import { NextSeo } from 'next-seo'

import Button from 'components/Button'

import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

const NotFoundTemplate = () => (
  <S.Wrapper>
    <NextSeo
      title={`${SITE_NAME} :: Página Não Encontrada`}
      description="Página que mostra que ela não foi encontrada nas rotas do site"
      canonical={`https://woofbowlstand.com.br`}
      openGraph={{
        url: `https://woofbowlstand.com.br`,
        title: `${SITE_NAME} :: Página Não Encontrada`,
        description:
          'Página que mostra que ela não foi encontrada nas rotas do site'
      }}
    />
    <S.Content>
      <h1>404</h1>
      <h3>Página Não Encontrada</h3>
      <p>
        Parece que a página que você tentou acessar não existe. Volte para a
        página inicial e tente outra página.
      </p>
      <Button as="a" href="/">
        Voltar a Página Inicial
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default NotFoundTemplate
