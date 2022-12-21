import { FooterProps } from 'components/Footer'

import Base from 'templates/Base'

import * as S from './styles'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import PdfCard, { PdfCardProps } from 'components/PdfCard'
import PostsEmpty from 'components/PostsEmpty'

export type DocumentosTemplateProps = {
  documentos: PdfCardProps[]
  editais: PdfCardProps[]
} & FooterProps

const DocumentosTemplate = ({
  email,
  documentos,
  editais,
  phone,
  redessociais,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName
}: DocumentosTemplateProps) => (
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

    <S.Wrapper>
      <Heading title="Documentos" backgroundTitle="Documentos" />

      {documentos.length > 0 ? (
        <S.DocsArea>
          {documentos.map((item, index) => (
            <PdfCard key={index} {...item} />
          ))}
        </S.DocsArea>
      ) : (
        <PostsEmpty texto="Nenhum documento encontrado no momento!" />
      )}

      <Heading title="Editais" backgroundTitle="Editais" />

      {editais.length > 0 ? (
        <S.DocsArea>
          {editais.map((item, index) => (
            <PdfCard key={index} {...item} />
          ))}
        </S.DocsArea>
      ) : (
        <PostsEmpty texto="Nenhum edital encontrado no momento!" />
      )}
    </S.Wrapper>
  </Base>
)

export default DocumentosTemplate
