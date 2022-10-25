import { FeaturesData, ProductsData } from 'templates/Home'

export const FeaturesMapper = (features: FeaturesData[]) => {
  return features
    ? features.map((feature) => ({
        title: feature.title,
        description: feature.description
      }))
    : []
}

export const ProductsMapper = (products: ProductsData[]) => {
  return products
    ? products.map((product) => ({
        title: product.title,
        slug: product.slug,
        description: product.description
      }))
    : []
}
