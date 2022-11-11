import { GetStaticProps } from 'next'

import homeData from 'templates/Home/data'

import HomeTemplate, { HomeProps } from 'templates/Home'

export default function Home(props: HomeProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24,
    props: {
      hero: homeData.hero,
      aboutText: homeData.aboutText,
      aboutTitle: homeData.aboutTitle,
      featuresTitle: homeData.featuresTitle,
      features: homeData.features,
      productsTitle: homeData.productsTitle,
      products: homeData.products,
      meowTitle: homeData.meowTitle,
      newsTitle: homeData.newsTitle
    }
  }
}
