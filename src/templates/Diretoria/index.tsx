import DirectoryCard, { DirectoryCardProps } from 'components/DirectoryCard'
import { FooterProps } from 'components/Footer'
import Heading from 'components/Heading'
import PostsEmpty from 'components/PostsEmpty'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'

import * as S from './styles'

export type DiretoriaTemplateProps = {
  peoples: DirectoryCardProps[]
  conselheiros: DirectoryCardProps[]
} & FooterProps

const DiretoriaTemplate = ({
  peoples,
  conselheiros,
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
      title={`${SITE_NAME} :: Diretoria & Conselho`}
      description="Conheça nossa equipe de administração e o conselho do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios."
      canonical={`https://servbuzios.org.br/diretoria-e-conselho`}
      openGraph={{
        url: `https://servbuzios.org.br/diretoria-e-conselho`,
        title: `${SITE_NAME} :: Diretoria & Conselho`,
        description:
          'Conheça nossa equipe de administração e o conselho do ServBúzios - Sindicato dos Servidores Públicos Municipais de Armação dos Búzios.'
      }}
    />
    <S.Wrapper>
      <Heading title="Diretoria" backgroundTitle="Diretoria" />

      {peoples.length > 0 ? (
        <S.CardsArea>
          {peoples.map((people, index) => (
            <DirectoryCard key={index} {...people} />
          ))}
        </S.CardsArea>
      ) : (
        <PostsEmpty texto="Nenhum componente da diretoria encontrado no momento!" />
      )}

      <Heading title="Conselheiros" backgroundTitle="Conselheiros" />

      {conselheiros.length > 0 ? (
        <S.CardsArea>
          {conselheiros.map((conselheiro, index) => (
            <DirectoryCard key={index} {...conselheiro} />
          ))}
        </S.CardsArea>
      ) : (
        <PostsEmpty texto="Nenhum componente do conselho encontrado no momento!" />
      )}
    </S.Wrapper>
  </Base>
)

export default DiretoriaTemplate
