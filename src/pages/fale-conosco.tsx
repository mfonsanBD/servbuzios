import { FooterProps } from 'components/Footer'
import client from 'graphql/client'
import CONTATO_QUERY from 'graphql/queries/contato'
import { GetStaticProps } from 'next'
import FaleConoscoTemplate from 'templates/FaleConosco'

export default function FaleConosco(props: FooterProps) {
  return <FaleConoscoTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(CONTATO_QUERY)

  return {
    revalidate: 60 * 60,
    props: {
      sindicatoName: data.dados[0].sindicatoName,
      sindicatoCNPJ: data.dados[0].sindicatoCnpj,
      sindicatoAddress: data.dados[0].sindicatoAddress,
      phone: data.dados[0].phone,
      email: data.dados[0].email,
      redessociais: {
        facebook: data.dados[0].redesSociais.facebook,
        instagram: data.dados[0].redesSociais.instagram,
        telegram: data.dados[0].redesSociais.telegram,
        whatsapp: data.dados[0].redesSociais.whatsapp
      }
    }
  }
}
