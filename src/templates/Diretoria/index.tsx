import DirectoryCard, { DirectoryCardProps } from 'components/DirectoryCard'
import { FooterProps } from 'components/Footer'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'

import * as S from './styles'

export type DiretoriaTemplateProps = {
  peoples: DirectoryCardProps[]
} & FooterProps

const DiretoriaTemplate = ({
  peoples,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: DiretoriaTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Diretoria`}
      description="Conheça nossa equipe de administração do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios."
      canonical={`https://servbuzios.org.br/diretoria`}
      openGraph={{
        url: `https://servbuzios.org.br/diretoria`,
        title: `${SITE_NAME} :: Diretoria`,
        description:
          'Conheça nossa equipe de administração do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios.'
      }}
    />
    <S.Wrapper>
      <Heading title="Diretoria" backgroundTitle="Diretoria" />

      <S.CardsArea>
        {peoples.map((people, index) => (
          <DirectoryCard key={index} {...people} />
        ))}
      </S.CardsArea>
    </S.Wrapper>
  </Base>
)

export default DiretoriaTemplate
