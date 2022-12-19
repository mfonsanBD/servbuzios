import { FooterProps } from 'components/Footer'
import DocumentsTable, { DocData } from 'components/DocumentsTable'

import Base from 'templates/Base'

import * as S from './styles'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'

export type DocumentosTemplateProps = {
  items: DocData[]
} & FooterProps

const DocumentosTemplate = ({
  email,
  items,
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
      title={`${SITE_NAME} :: Documentos`}
      description="Documentos referentes ao nosso sindicato"
      canonical={`https://servbuzios.org.br/documentos`}
      openGraph={{
        url: `https://servbuzios.org.br/documentos`,
        title: `${SITE_NAME} :: Documentos`,
        description: 'Documentos referentes ao nosso sindicato'
      }}
    />

    <S.Wrapper>
      <Heading title="Documentos" backgroundTitle="Documentos" />

      <DocumentsTable items={items} />
    </S.Wrapper>
  </Base>
)

export default DocumentosTemplate
