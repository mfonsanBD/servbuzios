import { useMemo, useState } from 'react'
import { NextSeo } from 'next-seo'
import { FiCheck, FiSearch } from 'react-icons/fi'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import ConvenioCard, { ConvenioCardProps } from 'components/ConvenioCard'
import PageHeader from 'components/PageHeader'
import PostsEmpty from 'components/PostsEmpty'
import { FooterProps } from 'components/Footer'

import * as S from './styles'

export type ConvenioTemplateProps = {
  convenios: ConvenioCardProps[]
} & FooterProps

// minúsculas e sem acentos, para a busca ignorar caixa e diacríticos
const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const ConvenioTemplate = ({
  convenios,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: ConvenioTemplateProps) => {
  const [query, setQuery] = useState('')

  const term = query.trim()
  const filtered = useMemo(() => {
    const normalized = normalize(query)
    if (!normalized) return convenios
    return convenios.filter((item) =>
      normalize(item.empresa).includes(normalized)
    )
  }, [convenios, query])

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
        title={`${SITE_NAME} :: Convênios e parcerias`}
        description="Empresas e profissionais parceiros com condições para associados do ServBúzios."
        canonical="https://servbuzios.org.br/convenio"
        openGraph={{
          url: 'https://servbuzios.org.br/convenio',
          title: `${SITE_NAME} :: Convênios e parcerias`,
          description:
            'Empresas e profissionais parceiros com condições para associados do ServBúzios.'
        }}
      />

      <PageHeader
        badge="Benefícios para associados"
        badgeIcon={<FiCheck />}
        title="Convênios e parcerias"
        description={`${convenios.length} empresas e profissionais parceiros com condições para associados do ServBúzios.`}
      >
        <S.Search>
          <S.SearchLabel htmlFor="busca-convenio">
            Buscar convênio
          </S.SearchLabel>
          <S.SearchField>
            <FiSearch aria-hidden="true" />
            <input
              id="busca-convenio"
              type="search"
              placeholder="Digite o nome da empresa"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </S.SearchField>
          {!!term && (
            <S.SearchStatus role="status" aria-live="polite">
              {filtered.length}{' '}
              {filtered.length === 1
                ? 'convênio encontrado'
                : 'convênios encontrados'}
            </S.SearchStatus>
          )}
        </S.Search>
      </PageHeader>

      <S.Grid>
        {convenios.length === 0 ? (
          <PostsEmpty texto="Nenhum convênio encontrado no momento!" />
        ) : filtered.length === 0 ? (
          <PostsEmpty texto={`Nenhum convênio encontrado para “${term}”.`} />
        ) : (
          <S.Cards>
            {filtered.map((item) => (
              <ConvenioCard key={`${item.empresa}-${item.imagem}`} {...item} />
            ))}
          </S.Cards>
        )}
      </S.Grid>
    </Base>
  )
}

export default ConvenioTemplate
