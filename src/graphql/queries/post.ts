export const QUERY_POST = `
  query QueryPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      seo {
        metaDesc
      }
      date
      content
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
`
