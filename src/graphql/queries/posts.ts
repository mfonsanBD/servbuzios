export const QUERY_POSTS = `
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
