import client from 'graphql/client'
import { QUERY_CATEGORIES } from 'graphql/queries/categories'
import { QUERY_POSTS_BY_CATEGORY } from 'graphql/queries/postsByCategory'
import { GetStaticPaths, GetStaticProps } from 'next'
import CategoriaTemplate, { CategoriaTemplateProps } from 'templates/Categoria'
import { PostsByCategoryMapper } from 'utils/mappers'

export default function Categoria(props: CategoriaTemplateProps) {
  return <CategoriaTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await client.request(QUERY_CATEGORIES)

  const paths = categories.nodes.map((category: { slug: string }) => {
    return {
      params: {
        slug: category.slug
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

  const { category } = await client.request(QUERY_POSTS_BY_CATEGORY, { slug })

  return {
    props: {
      title: category.name,
      slug: category.slug,
      posts: PostsByCategoryMapper(category.posts.nodes)
    },
    revalidate: 60 * 60 * 24
  }
}
