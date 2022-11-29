/* eslint-disable @next/next/no-img-element */
import { CategoryData } from 'components/PostCard'
import TitleArea from 'components/TitleArea'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { SITE_NAME } from 'pages/_app'
import { TbMinusVertical } from 'react-icons/tb'
import Base from 'templates/Base'
import { formatDateBlog } from 'utils/formatDate'

import * as S from './styles'

export type PostagemTemplateData = {
  sourceUrl: string
  title: string
  slug: string
  metaDescription: string
  content: string
  createdAt: string
  categories: CategoryData[]
}

export type PostagemTemplateProps = {
  post: PostagemTemplateData
}

const PostagemTemplate = ({ post }: PostagemTemplateProps) => (
  <Base>
    <NextSeo
      title={`${SITE_NAME} :: ${post.title}`}
      description={post.metaDescription}
      canonical={`https://woofbowlstand.com.br/post/${post.slug}`}
      openGraph={{
        url: `https://woofbowlstand.com.br/post/${post.slug}`,
        title: `${SITE_NAME} :: ${post.title}`,
        description: post.metaDescription,
        images: [
          {
            url: post.sourceUrl,
            alt: `${post.title}`
          }
        ]
      }}
    />

    <TitleArea title={post.title} subTitle="Blog" subTitleUrl="/blog" />

    <S.Wrapper>
      <S.CoverBox>
        <img src={post.sourceUrl} alt={post.title} />
      </S.CoverBox>

      <S.PostData>
        {post.categories.map((category, index) => (
          <Link href={`/categoria/${category.slug}`} passHref key={index}>
            <a>{category.name}</a>
          </Link>
        ))}

        <TbMinusVertical size={24} />

        <div className="createdAt">{formatDateBlog(post.createdAt)}</div>
      </S.PostData>

      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </S.Wrapper>
  </Base>
)

export default PostagemTemplate
