import client from 'graphql/client'
import { QUERY_POSTS } from 'graphql/queries/posts'
import { GetStaticProps } from 'next'
import BlogTemplate, { BlogTemplateProps } from 'templates/Blog'
import { BlogMapper } from 'utils/mappers'

export default function Blog(props: BlogTemplateProps) {
  return <BlogTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request(QUERY_POSTS)

  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      posts: BlogMapper(posts.nodes)
    }
  }
}
