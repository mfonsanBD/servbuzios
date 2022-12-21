import client from 'graphql/client'
import ADVOGADOS_QUERY from 'graphql/queries/advogados'
import { GetStaticProps } from 'next'
import JuridicoTemplate, { JuridicoTemplateProps } from 'templates/Juridico'

export default function Juridico(props: JuridicoTemplateProps) {
  return <JuridicoTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(ADVOGADOS_QUERY)

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
      },
      advogados: data.advogados
    }
  }
}
