import PostCard, { PostCardPorps } from 'components/PostCard'
import TitleArea from 'components/TitleArea'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import { useState } from 'react'
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs'
import { Pagination } from 'react-pagination-bar'
import Base from 'templates/Base'

import * as S from './styles'

export type CategoriaTemplateProps = {
  title: string
  slug: string
  posts: PostCardPorps[]
}

const CategoriaTemplate = ({ title, slug, posts }: CategoriaTemplateProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 6

  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: ${title}`}
        description="Página de postagens por categoria"
        canonical={`https://woofbowlstand.com.br/categoria/${slug}`}
        openGraph={{
          url: `https://woofbowlstand.com.br/categoria/${slug}`,
          title: `${SITE_NAME} :: ${title}`,
          description: 'Página de postagens por categoria'
        }}
      />

      <TitleArea title={title} />

      <S.Wrapper>
        <S.Posts>
          {posts
            .slice(
              (currentPage - 1) * pagePostsLimit,
              currentPage * pagePostsLimit
            )
            .map((post, index) => (
              <PostCard
                key={index}
                sourceUrl={post.sourceUrl}
                title={post.title}
                slug={post.slug}
                createdAt={post.createdAt}
                categories={post.categories}
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
      </S.Wrapper>
    </Base>
  )
}

export default CategoriaTemplate
