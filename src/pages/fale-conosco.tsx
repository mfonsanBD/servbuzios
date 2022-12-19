import { FooterProps } from 'components/Footer'
import { GetStaticProps } from 'next'
import FaleConoscoTemplate from 'templates/FaleConosco'

export default function FaleConosco(props: FooterProps) {
  return <FaleConoscoTemplate {...props} />
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
      phone: '(22) 97405-8388',
      email: 'servbuzios2022@gmail.com',
      redessociais: {
        facebook: 'string',
        instagram: 'string',
        telegram: 'string',
        whatsapp: 'string'
      }
    }
  }
}