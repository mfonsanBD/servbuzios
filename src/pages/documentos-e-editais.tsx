import client from 'graphql/client'
import DOCUMENTOS_QUERY from 'graphql/queries/documentos'
import { GetStaticProps } from 'next'
import DocumentosTemplate, {
  DocumentosTemplateProps
} from 'templates/Documentos'

export default function Documentos(props: DocumentosTemplateProps) {
  return <DocumentosTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(DOCUMENTOS_QUERY)

  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      documentos: data.documentos,
      editais: data.editais,
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
