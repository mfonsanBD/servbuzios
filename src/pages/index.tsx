import { GetStaticProps } from 'next'

import HomeTemplate, { HomeProps } from 'templates/Home'

export default function Home(props: HomeProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {}
  }
}
