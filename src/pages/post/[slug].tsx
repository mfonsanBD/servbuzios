import client from 'graphql/client'
import { QUERY_POST } from 'graphql/queries/post'
import { QUERY_POSTS } from 'graphql/queries/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

import PostagemTemplate, { PostagemTemplateProps } from 'templates/Postagem'
import { PostMapper } from 'utils/mappers'

export default function Postagem(props: PostagemTemplateProps) {
  return <PostagemTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await client.request(QUERY_POSTS)

  const paths = posts.nodes.map((post: { slug: string }) => {
    return {
      params: {
        slug: post.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug

  const { post } = await client.request(QUERY_POST, { slug })

  return {
    props: {
      post: PostMapper(post)
    },
    revalidate: 60 * 60 * 24
  }
}
