import client from 'graphql/client'
import HOME_CONVENIO from 'graphql/queries/convenio'
import { GetStaticProps } from 'next'
import ConvenioTemplate, { ConvenioTemplateProps } from 'templates/Convenio'
import { ConvenioMapper } from 'utils/mappers'

export default function Convenio(props: ConvenioTemplateProps) {
  return <ConvenioTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(HOME_CONVENIO)

  return {
    revalidate: 60 * 60,
    props: {
      convenios: ConvenioMapper(data.convenios),
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
