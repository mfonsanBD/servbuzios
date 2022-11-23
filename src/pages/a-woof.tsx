import { GetStaticProps } from 'next'

import aboutData from 'utils/home'

import AWoofTemplate, { AWoofTemplateProps } from 'templates/AWoof'

export default function AWoof(props: AWoofTemplateProps) {
  return <AWoofTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24,
    props: {
      aboutText: aboutData.aboutText,
      aboutTitle: aboutData.aboutTitle
    }
  }
}
