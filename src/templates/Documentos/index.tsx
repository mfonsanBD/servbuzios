import { NextSeo } from 'next-seo'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Base from 'templates/Base'

import { NewsDate } from 'utils/formatDate'

import * as S from './styles'
import 'react-tabs/style/react-tabs.css'

import { SITE_NAME } from 'pages/_app'

import Heading from 'components/Heading'
import PostsEmpty from 'components/PostsEmpty'
import { FooterProps } from 'components/Footer'
import PdfCard, { PdfCardProps } from 'components/PdfCard'

export type DocumentosTemplateProps = {
  documentos: PdfCardProps[]
  editais: PdfCardProps[]
  artigos: PdfCardProps[]
  leis: PdfCardProps[]
} & FooterProps

const DocumentosTemplate = ({
  email,
  documentos,
  editais,
  artigos,
  leis,
  phone,
  redessociais,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName
}: DocumentosTemplateProps) => {
  const editais2022 = editais.filter((doc) =>
    NewsDate(doc.criadoEm).includes('2022')
  )

  const editais2023 = editais.filter((doc) =>
    NewsDate(doc.criadoEm).includes('2023')
  )

  const editais2024 = editais.filter((doc) =>
    NewsDate(doc.criadoEm).includes('2024')
  )
  return (
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
          <PostsEmpty texto="Nenhum documento de 2022 encontrado até o momento!" />
        )}

        <Heading title="Editais" backgroundTitle="Editais" />

        <Tabs className="tabs">
          <TabList className="tabList">
            <Tab className="tab">Editais de 2022</Tab>
            <Tab className="tab">Editais de 2023</Tab>
            <Tab className="tab">Editais de 2024</Tab>
          </TabList>

          <TabPanel className="tabPanel">
            {editais2022.length > 0 ? (
              <S.DocsArea>
                {editais2022.map((item, index) => (
                  <PdfCard key={index} {...item} />
                ))}
              </S.DocsArea>
            ) : (
              <S.EmptyArea>
                <PostsEmpty texto="Nenhum Edital de 2022 encontrado até o momento!" />
              </S.EmptyArea>
            )}
          </TabPanel>

          <TabPanel className="tabPanel">
            {editais2023.length > 0 ? (
              <S.DocsArea>
                {editais2023.map((item, index) => (
                  <PdfCard key={index} {...item} />
                ))}
              </S.DocsArea>
            ) : (
              <S.EmptyArea>
                <PostsEmpty texto="Nenhum Edital de 2023 encontrado até o momento!" />
              </S.EmptyArea>
            )}
          </TabPanel>

          <TabPanel className="tabPanel">
            {editais2024.length > 0 ? (
              <S.DocsArea>
                {editais2024.map((item, index) => (
                  <PdfCard key={index} {...item} />
                ))}
              </S.DocsArea>
            ) : (
              <S.EmptyArea>
                <PostsEmpty texto="Nenhum Edital de 2024 encontrado até o momento!" />
              </S.EmptyArea>
            )}
          </TabPanel>
        </Tabs>

        <Heading title="Jornal Buziando" backgroundTitle="Jornal Buziando" />

        {artigos.length > 0 ? (
          <S.DocsArea>
            {artigos.map((item, index) => (
              <PdfCard key={index} {...item} />
            ))}
          </S.DocsArea>
        ) : (
          <PostsEmpty texto="Nenhum artigo encontrado até o momento!" />
        )}

        <Heading title="Leis Importantes" backgroundTitle="Leis Importantes" />

        {leis.length > 0 ? (
          <S.DocsArea>
            {leis.map((item, index) => (
              <PdfCard key={index} {...item} />
            ))}
          </S.DocsArea>
        ) : (
          <PostsEmpty texto="Nenhuma lei encontrada até o momento!" />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default DocumentosTemplate
