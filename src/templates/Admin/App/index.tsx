import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { useSession } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { Pagination } from 'react-pagination-bar'

import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

import AdminBase from '../Base'

import PostsEmpty from 'components/PostsEmpty'
import AdminAddPostForm from 'components/AdminAddPostForm'
import AdminPostCard, { AdminPostCardProps } from 'components/AdminPostCard'

import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs'

export type AdminTemplateProps = {
  posts: AdminPostCardProps[]
}

const AppTemplate = ({ posts }: AdminTemplateProps) => {
  const { data } = useSession()

  const [currentPage, setCurrentPage] = useState(1)
  const pagePostsLimit = 6

  return (
    <AdminBase username={`${data?.user?.name}`} photo={`${data?.user?.image}`}>
      <NextSeo title={`${SITE_NAME} :: Postagens no Blog`} />

      <S.Content>
        <S.Wrapper>
          <S.Left>
            <AdminAddPostForm />
          </S.Left>
          <S.Right>
            <h2>Postagens no Blog</h2>

            {posts.length > 0 ? (
              <>
                <S.PostsArea>
                  {posts
                    .slice(
                      (currentPage - 1) * pagePostsLimit,
                      currentPage * pagePostsLimit
                    )
                    .map((post, index) => (
                      <AdminPostCard
                        key={index}
                        image={post.image}
                        title={post.title}
                        codigo={post.codigo}
                      />
                    ))}
                </S.PostsArea>

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
              </>
            ) : (
              <PostsEmpty area="post" />
            )}
          </S.Right>
        </S.Wrapper>

        <ToastContainer />
      </S.Content>
    </AdminBase>
  )
}

export default AppTemplate
