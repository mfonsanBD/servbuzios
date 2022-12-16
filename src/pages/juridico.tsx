import { GetStaticProps } from 'next'
import JuridicoTemplate, { JuridicoTemplateProps } from 'templates/Juridico'

export default function Juridico(props: JuridicoTemplateProps) {
  return <JuridicoTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      sindicatoName:
        'Sindicato dos Servidores Públicos Municipais de Armação dos Búzios',
      sindicatoCNPJ: '04.930.581/0001-11',
      sindicatoAddress:
        'Estrada da Usina, 350 - Loja 03 - Armação dos Búzios, RJ - 28950-785',
      biografia:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde illum odio odit laboriosam voluptatum doloremque numquam corrupti. Nihil accusamus voluptate, sint unde, deserunt neque assumenda id, velit nostrum aperiam iure?',
      facebook: '/#',
      foto: '/img/photo.jpg',
      instagram: '/#',
      nome: 'Dr. Advogado do Sindicato',
      oab: '000.000',
      whatsapp: '/#'
    }
  }
}
