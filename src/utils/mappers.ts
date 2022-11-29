/* eslint-disable @typescript-eslint/no-explicit-any */
export const PostsMapper = (posts: any[]) => {
  return posts
    ? posts
        .map((post) => ({
          sourceUrl:
            post?.featuredImage === null
              ? `${process.env.NEXT_PUBLIC_URL}/img/about-image.jpg`
              : post?.featuredImage.node.sourceUrl,
          title: post.title,
          slug: post.slug,
          createdAt: post.date,
          categories: post?.categories?.nodes
            .map((category: { name: string; slug: string }) => {
              return {
                name: category.name,
                slug: category.slug
              }
            })
            .slice(0, 1)
        }))
        .slice(0, 3)
    : []
}

export const PostMapper = (post: any) => {
  return {
    sourceUrl:
      post?.featuredImage === null
        ? `${process.env.NEXT_PUBLIC_URL}/img/about-image.jpg`
        : post?.featuredImage.node.sourceUrl,
    title: post.title,
    slug: post.slug,
    metaDescription: post?.seo.metaDesc,
    content: post?.content,
    createdAt: post.date,
    categories: post?.categories?.nodes
      .map((category: { name: string; slug: string }) => {
        return {
          name: category.name,
          slug: category.slug
        }
      })
      .slice(0, 1)
  }
}

export const PostsByCategoryMapper = (posts: any[]) => {
  return posts
    ? posts.map((post) => ({
        sourceUrl:
          post?.featuredImage === null
            ? `${process.env.NEXT_PUBLIC_URL}/img/about-image.jpg`
            : post?.featuredImage.node.sourceUrl,
        title: post.title,
        slug: post.slug,
        createdAt: post.date,
        categories: post?.categories?.nodes
          .map((category: { name: string; slug: string }) => {
            return {
              name: category.name,
              slug: category.slug
            }
          })
          .slice(0, 1)
      }))
    : []
}

export const BlogMapper = (posts: any[]) => {
  return posts
    ? posts.map((post) => ({
        sourceUrl:
          post?.featuredImage === null
            ? `${process.env.NEXT_PUBLIC_URL}/img/about-image.jpg`
            : post?.featuredImage.node.sourceUrl,
        title: post.title,
        slug: post.slug,
        createdAt: post.date,
        categories: post?.categories?.nodes
          .map((category: { name: string; slug: string }) => {
            return {
              name: category.name,
              slug: category.slug
            }
          })
          .slice(0, 1)
      }))
    : []
}
