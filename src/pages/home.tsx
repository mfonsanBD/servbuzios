import { GetStaticProps } from 'next'
import { db } from 'service/api'
import { collection, getDocs } from 'firebase/firestore'

import HomeTemplate, { HomeProps } from 'templates/Home'
import { FeaturesMapper, ProductsMapper } from 'utils/mapper'

export default function Home(props: HomeProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = collection(db, 'homepage')

  const data = await getDocs(homePageData)
  const dataArray = data.docs.map((doc) => ({
    ...doc.data()
  }))

  return {
    revalidate: 60 * 60 * 24,
    props: {
      heroTitle: dataArray[0].heroTitle,
      heroSubtitle: dataArray[0].heroSubtitle,
      aboutText: dataArray[0].aboutText,
      aboutTitle: dataArray[0].aboutTitle,
      featuresTitle: dataArray[0].featuresTitle,
      features: FeaturesMapper(dataArray[0].features),
      productsTitle: dataArray[0].productsTitle,
      products: ProductsMapper(dataArray[0].products),
      newsTitle: dataArray[0].newsTitle
    }
  }
}
