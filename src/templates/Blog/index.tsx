import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { Pagination } from 'react-pagination-bar'
import 'react-pagination-bar/dist/index.css'

import TitleArea from 'components/TitleArea'
import PostCard, { PostCardPorps } from 'components/PostCard'

import { SITE_NAME } from 'pages/_app'

import Base from 'templates/Base'

import {
  BsChevronRight,
  BsChevronLeft,
  BsChevronDoubleRight,
  BsChevronDoubleLeft
} from 'react-icons/bs'
import * as S from './styles'

export type BlogTemplateProps = {
  posts: PostCardPorps[]
}

const BlogTemplate = ({ posts }: BlogTemplateProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 6

  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: Blog`}
        description="Acompanhe o nosso blog e saiba mais sobre nossa empresa e nossas dicas"
        canonical={`https://woofbowlstand.com.br/blog`}
        openGraph={{
          url: `https://woofbowlstand.com.br/blog`,
          title: `${SITE_NAME} :: Blog`,
          description:
            'Acompanhe o nosso blog e saiba mais sobre nossa empresa e nossas dicas',
          images: [
            {
              url: `${process.env.NEXTAUTH_URL}/img/Thumbnail.png`,
              alt: `${SITE_NAME} :: Blog`
            }
          ]
        }}
      />

      <TitleArea title="Blog" />

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

export default BlogTemplate
