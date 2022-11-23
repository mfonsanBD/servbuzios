import { GetStaticProps } from 'next'
import ProdutoTemplate, { ProdutoTemplateProps } from 'templates/Produto'

import modeloData from 'utils/modelos'

export default function Produto(props: ProdutoTemplateProps) {
  return <ProdutoTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24,
    props: {
      types: modeloData.flat.types
    }
  }
}
