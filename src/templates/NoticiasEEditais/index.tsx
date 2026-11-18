import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { FiArrowRight } from 'react-icons/fi'
import { TbSpeakerphone } from 'react-icons/tb'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Button from 'components/Button'
import PageHeader from 'components/PageHeader'
import Pagination from 'components/Pagination'
import PostsEmpty from 'components/PostsEmpty'
import { FooterProps } from 'components/Footer'
import NewsCard, { NewsCardProps } from 'components/NewsCard'

import { IsoDay, LongDate } from 'utils/formatDate'

import * as S from './styles'

export type NoticiasEEditaisTemplateProps = {
  posts: NewsCardProps[]
} & FooterProps

const PAGE_SIZE = 9

const NoticiasEEditaisTemplate = ({
  posts,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: NoticiasEEditaisTemplateProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const gridRef = useRef<HTMLDivElement>(null)
  const shouldScroll = useRef(false)

  // posts[0] é o destaque (só na página 1); os demais entram na grade paginada
  const [lead, ...rest] = posts
  const totalPages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE))
  const pagePosts = rest.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const handlePageChange = (page: number) => {
    shouldScroll.current = true
    setCurrentPage(page)
  }

  // rola depois da renderização, quando a grade já está na posição final
  useEffect(() => {
    if (!shouldScroll.current) return
    shouldScroll.current = false
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentPage])

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
        title={`${SITE_NAME} :: Notícias`}
        description="Fique atento as nossas notícias."
        canonical={`https://servbuzios.org.br/noticias`}
        openGraph={{
          url: `https://servbuzios.org.br/noticias`,
          title: `${SITE_NAME} :: Notícias`,
          description: 'Fique atento as nossas notícias.'
        }}
      />

      <PageHeader
        badge="Notícias"
        badgeIcon={<TbSpeakerphone />}
        title="Notícias"
        description="Fique por dentro das lutas, das conquistas e dos comunicados do sindicato."
      />

      <S.Section>
        <S.Inner>
          {posts.length > 0 ? (
            <>
              {currentPage === 1 && !!lead && (
                <S.Featured>
                  <Link href={`/noticia/${lead.slug}`} passHref>
                    <S.FeaturedCover tabIndex={-1} aria-hidden="true">
                      <Image
                        src={lead.imagem}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        sizes="(max-width: 900px) 100vw, 580px"
                        priority
                      />
                    </S.FeaturedCover>
                  </Link>

                  <S.FeaturedBody>
                    <S.Meta>
                      <span>Mais recente</span>
                      <time dateTime={IsoDay(lead.createdAt)}>
                        {LongDate(lead.createdAt)}
                      </time>
                    </S.Meta>

                    <Link href={`/noticia/${lead.slug}`} passHref>
                      <S.FeaturedTitle>{lead.titulo}</S.FeaturedTitle>
                    </Link>

                    {!!lead.descricao && (
                      <S.FeaturedText>{lead.descricao}</S.FeaturedText>
                    )}

                    <Link href={`/noticia/${lead.slug}`} passHref>
                      <Button as="a">
                        Ler notícia
                        <FiArrowRight aria-hidden="true" />
                      </Button>
                    </Link>
                  </S.FeaturedBody>
                </S.Featured>
              )}

              {pagePosts.length > 0 && (
                <S.Grid ref={gridRef}>
                  {pagePosts.map((post) => (
                    <NewsCard
                      key={post.slug}
                      imagem={post.imagem}
                      titulo={post.titulo}
                      slug={post.slug}
                      createdAt={post.createdAt}
                      descricao={post.descricao}
                    />
                  ))}
                </S.Grid>
              )}

              <S.PaginationArea>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
                <S.Summary>
                  {`Página ${currentPage} de ${totalPages} · ${posts.length} notícias`}
                </S.Summary>
              </S.PaginationArea>
            </>
          ) : (
            <PostsEmpty texto="Nenhuma notícia encontrada no momento!" />
          )}
        </S.Inner>
      </S.Section>
    </Base>
  )
}

export default NoticiasEEditaisTemplate
