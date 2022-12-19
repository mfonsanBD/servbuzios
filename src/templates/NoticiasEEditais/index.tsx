import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { Pagination } from 'react-pagination-bar'

import Heading from 'components/Heading'
import { FooterProps } from 'components/Footer'
import NewsCard, { NewsCardProps } from 'components/NewsCard'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleRight,
  BsChevronDoubleLeft
} from 'react-icons/bs'

export type NoticiasEEditaisTemplateProps = {
  posts: NewsCardProps[]
} & FooterProps

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
  const pagePostsLimit = 12

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
        title={`${SITE_NAME} :: Notícias & Editais`}
        description="Fique atento as nossas notícias & editais."
        canonical={`https://servbuzios.org.br/noticias-e-editais`}
        openGraph={{
          url: `https://servbuzios.org.br/noticias-e-editais`,
          title: `${SITE_NAME} :: Notícias & Editais`,
          description: 'Fique atento as nossas notícias & editais.'
        }}
      />
      <S.Wrapper>
        <Heading
          title="Notícias & Editais"
          backgroundTitle="Notícias & Editais"
        />

        <S.PostsArea>
          <S.Posts>
            {posts
              .slice(
                (currentPage - 1) * pagePostsLimit,
                currentPage * pagePostsLimit
              )
              .map((post, index) => (
                <NewsCard
                  key={index}
                  imagem={post.imagem}
                  titulo={post.titulo}
                  slug={post.slug}
                  tipo={post.tipo}
                  createdAt={post.createdAt}
                />
              ))}
          </S.Posts>

          <S.PaginationArea>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={pagePostsLimit}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              totalItems={posts.length}
              pageNeighbours={1}
              startLabel={<BsChevronDoubleLeft />}
              endLabel={<BsChevronDoubleRight />}
              nextLabel={<BsChevronRight />}
              prevLabel={<BsChevronLeft />}
              customClassNames={{
                rpbItemClassName: 'custom-item',
                rpbItemClassNameActive: 'custom-item--active',
                rpbGoItemClassName: 'custom-go-item',
                rpbItemClassNameDisable: 'custom-item--disable',
                rpbProgressClassName: 'custom-progress-bar',
                rpbRootClassName: 'custom-root'
              }}
            />
          </S.PaginationArea>
        </S.PostsArea>
      </S.Wrapper>
    </Base>
  )
}

export default NoticiasEEditaisTemplate
