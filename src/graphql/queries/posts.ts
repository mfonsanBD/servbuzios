import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query QueryPosts {
    posts {
      nodes {
        title
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`
