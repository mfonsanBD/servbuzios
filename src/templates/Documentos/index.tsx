import { NextSeo } from 'next-seo'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import Base from 'templates/Base'

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
  const editaisPorAno = editais.reduce((acc, doc) => {
    const ano = new Date(doc.criadoEm).getFullYear().toString()
    if (!acc[ano]) {
      acc[ano] = []
    }
    acc[ano].push(doc)
    return acc
  }, {} as Record<string, PdfCardProps[]>)

  const anosOrdenados = Object.keys(editaisPorAno)
    .sort((a, b) => parseInt(b) - parseInt(a))
    .map((ano) => ({
      ano,
      editais: editaisPorAno[ano].sort(
        (a, b) =>
          new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime()
      )
    }))

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
            {anosOrdenados.map(({ ano }) => (
              <Tab key={ano} className="tab">
                Editais de {ano}
              </Tab>
            ))}
          </TabList>

          {anosOrdenados.map(({ ano, editais }) => (
            <TabPanel key={ano} className="tabPanel">
              {editais.length > 0 ? (
                <S.DocsArea>
                  {editais.map((item, index) => (
                    <PdfCard key={index} {...item} />
                  ))}
                </S.DocsArea>
              ) : (
                <S.EmptyArea>
                  <PostsEmpty
                    texto={`Nenhum Edital de ${ano} encontrado até o momento!`}
                  />
                </S.EmptyArea>
              )}
            </TabPanel>
          ))}
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
