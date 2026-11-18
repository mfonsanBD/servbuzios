import { useMemo, useState } from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { FiFileText, FiMinus, FiPlus } from 'react-icons/fi'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Badge from 'components/Badge'
import DocumentRow from 'components/DocumentRow'
import PageHeader from 'components/PageHeader'
import PostsEmpty from 'components/PostsEmpty'
import { FooterProps } from 'components/Footer'

import { SectionText, SectionTitle } from 'styles/shared'
import { ShortDate } from 'utils/formatDate'

import * as S from './styles'

export type DocumentoItem = {
  imagem: string
  criadoEm: string
  titulo?: string
  arquivo: string
}

export type DocumentosTemplateProps = {
  documentos: DocumentoItem[]
  editais: DocumentoItem[]
  /** edições do Jornal Buziando: só capa e arquivo */
  artigos: DocumentoItem[]
  leis: DocumentoItem[]
} & FooterProps

const byNewest = (a: DocumentoItem, b: DocumentoItem) =>
  new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime()

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
  const documentosOrdenados = useMemo(
    () => [...documentos].sort(byNewest),
    [documentos]
  )

  const artigosOrdenados = useMemo(() => [...artigos].sort(byNewest), [artigos])

  const anosOrdenados = useMemo(() => {
    const editaisPorAno = editais.reduce((acc, doc) => {
      const ano = new Date(doc.criadoEm).getFullYear().toString()
      if (!acc[ano]) {
        acc[ano] = []
      }
      acc[ano].push(doc)
      return acc
    }, {} as Record<string, DocumentoItem[]>)

    return Object.keys(editaisPorAno)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map((ano) => ({
        ano,
        editais: editaisPorAno[ano].sort(byNewest)
      }))
  }, [editais])

  // o ano mais recente começa aberto; cada ano abre e fecha de forma independente
  const [openYears, setOpenYears] = useState<Record<string, boolean>>(() =>
    anosOrdenados.length > 0 ? { [anosOrdenados[0].ano]: true } : {}
  )

  const toggleYear = (ano: string) =>
    setOpenYears((current) => ({ ...current, [ano]: !current[ano] }))

  const sections = [
    { href: '#documentos', label: 'Documentos', total: documentos.length },
    { href: '#editais', label: 'Editais', total: editais.length },
    { href: '#jornal', label: 'Jornal Buziando', total: artigos.length },
    { href: '#leis', label: 'Leis importantes', total: leis.length }
  ]

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
        canonical="https://servbuzios.org.br/documentos-e-editais"
        openGraph={{
          url: 'https://servbuzios.org.br/documentos-e-editais',
          title: `${SITE_NAME} :: Documentos & Editais`,
          description: 'Documentos referentes ao nosso sindicato'
        }}
      />

      <PageHeader
        badge="Transparência"
        badgeIcon={<FiFileText />}
        title="Documentos e editais"
        description="Estatuto, atas, editais de convocação, edições do Jornal Buziando e as leis que regem a carreira do servidor."
      >
        <S.SectionNav aria-label="Seções da página">
          {sections.map((section) => (
            <S.SectionLink key={section.href} href={section.href}>
              {section.label} · {section.total}
            </S.SectionLink>
          ))}
        </S.SectionNav>
      </PageHeader>

      <S.Section id="documentos" $first>
        <S.Inner>
          <SectionTitle>Documentos do sindicato</SectionTitle>

          {documentosOrdenados.length > 0 ? (
            <S.ListCard>
              {documentosOrdenados.map((item) => (
                <DocumentRow
                  key={item.arquivo}
                  titulo={item.titulo ?? 'Documento'}
                  arquivo={item.arquivo}
                  date={`Publicado em ${ShortDate(item.criadoEm)}`}
                />
              ))}
            </S.ListCard>
          ) : (
            <PostsEmpty texto="Nenhum documento encontrado até o momento!" />
          )}
        </S.Inner>
      </S.Section>

      <S.Section id="editais">
        <S.Inner>
          <S.SectionHead>
            <SectionTitle>Editais</SectionTitle>
            <SectionText>
              Convocações de assembleias e editais, organizados por ano.
            </SectionText>
          </S.SectionHead>

          {anosOrdenados.length > 0 ? (
            <S.Years>
              {anosOrdenados.map(({ ano, editais: lista }) => {
                const isOpen = !!openYears[ano]
                const panelId = `editais-${ano}`

                return (
                  <S.Year key={ano}>
                    <S.YearButton
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleYear(ano)}
                    >
                      <S.YearLabel>
                        <strong>{ano}</strong>
                        <span>
                          {lista.length}{' '}
                          {lista.length === 1 ? 'edital' : 'editais'}
                        </span>
                      </S.YearLabel>
                      {isOpen ? (
                        <FiMinus aria-hidden="true" />
                      ) : (
                        <FiPlus aria-hidden="true" />
                      )}
                    </S.YearButton>

                    <S.YearPanel id={panelId} hidden={!isOpen}>
                      {lista.map((item) => (
                        <DocumentRow
                          key={item.arquivo}
                          titulo={item.titulo ?? 'Edital'}
                          arquivo={item.arquivo}
                          date={ShortDate(item.criadoEm)}
                        />
                      ))}
                    </S.YearPanel>
                  </S.Year>
                )
              })}
            </S.Years>
          ) : (
            <PostsEmpty texto="Nenhum edital encontrado até o momento!" />
          )}
        </S.Inner>
      </S.Section>

      <S.Section id="jornal">
        <S.Inner>
          {artigosOrdenados.length > 0 ? (
            <S.Journal>
              <S.JournalText>
                <Badge icon={<FiFileText />} inverted>
                  Publicação
                </Badge>
                <h2>Jornal Buziando</h2>
                <p>As edições do jornal do ServBúzios, em PDF.</p>
              </S.JournalText>

              <S.Covers>
                {artigosOrdenados.map((item) => (
                  <S.Cover
                    key={item.arquivo}
                    href={item.arquivo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <S.CoverArt>
                      <Image
                        src={item.imagem}
                        alt="Capa de edição do Jornal Buziando"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                    </S.CoverArt>
                    <span>Edição de {ShortDate(item.criadoEm)}</span>
                  </S.Cover>
                ))}
              </S.Covers>
            </S.Journal>
          ) : (
            <>
              <SectionTitle>Jornal Buziando</SectionTitle>
              <PostsEmpty texto="Nenhum artigo encontrado até o momento!" />
            </>
          )}
        </S.Inner>
      </S.Section>

      <S.Section id="leis" $last>
        <S.Inner>
          <S.SectionHead>
            <SectionTitle>Leis importantes</SectionTitle>
            <SectionText>
              A legislação municipal que todo servidor precisa conhecer.
            </SectionText>
          </S.SectionHead>

          {leis.length > 0 ? (
            <S.ListCard>
              <S.LawsGrid>
                {leis.map((item) => (
                  <DocumentRow
                    key={item.arquivo}
                    titulo={item.titulo ?? 'Lei'}
                    arquivo={item.arquivo}
                  />
                ))}
              </S.LawsGrid>
            </S.ListCard>
          ) : (
            <PostsEmpty texto="Nenhuma lei encontrada até o momento!" />
          )}
        </S.Inner>
      </S.Section>
    </Base>
  )
}

export default DocumentosTemplate
