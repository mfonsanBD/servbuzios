export const QUERY_CATEGORIES = `
  query QueryCategories {
    categories {
      nodes {
        name
        slug
      }
    }
  }
`
