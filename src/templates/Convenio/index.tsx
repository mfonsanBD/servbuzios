import ConvenioCard, { ConvenioCardProps } from 'components/ConvenioCard'
import * as S from './styles'
import { FooterProps } from 'components/Footer'
import Base from 'templates/Base'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Heading from 'components/Heading'
import PostsEmpty from 'components/PostsEmpty'

export type ConvenioTemplateProps = {
  convenios: ConvenioCardProps[]
} & FooterProps

const ConvenioTemplate = ({
  convenios,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: ConvenioTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Documentos & Editais`}
      description="Documentos referentes ao nosso sindicato"
      canonical={`https://servbuzios.org.br/documentos`}
      openGraph={{
        url: `https://servbuzios.org.br/documentos`,
        title: `${SITE_NAME} :: Documentos & Editais`,
        description: 'Documentos referentes ao nosso sindicato'
      }}
    />

    <S.ConvenioSection>
      <Heading title="Convênios" backgroundTitle="Convênios" />

      {convenios.length > 0 ? (
        <S.ConvenioArea>
          {convenios.map((item, index) => (
            <ConvenioCard key={index} {...item} />
          ))}
        </S.ConvenioArea>
      ) : (
        <PostsEmpty texto="Nenhum convênio encontrado no momento!" />
      )}
    </S.ConvenioSection>
  </Base>
)

export default ConvenioTemplate
