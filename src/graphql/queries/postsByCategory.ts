export const QUERY_POSTS_BY_CATEGORY = `
  query QueryCategory($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
      slug
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
  }
`
