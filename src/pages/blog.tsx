import client from 'graphql/client'
import { QUERY_POSTS } from 'graphql/queries/posts'
import { GetStaticProps } from 'next'
import BlogTemplate, { BlogTemplateProps } from 'templates/Blog'
import { BlogMapper } from 'utils/mappers'

export default function Blog(props: BlogTemplateProps) {
  return <BlogTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { posts }
  } = await client.query({
    query: QUERY_POSTS,
    fetchPolicy: 'no-cache'
  })

  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      posts: BlogMapper(posts.nodes)
    }
  }
}
