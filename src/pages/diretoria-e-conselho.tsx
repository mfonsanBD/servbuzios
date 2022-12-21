import client from 'graphql/client'
import DIRETORIA_QUERY from 'graphql/queries/diretoria'
import { GetStaticProps } from 'next'
import DiretoriaTemplate, { DiretoriaTemplateProps } from 'templates/Diretoria'
import { DirectoryMapper } from 'utils/mappers'

export default function Diretoria(props: DiretoriaTemplateProps) {
  return <DiretoriaTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(DIRETORIA_QUERY)

  return {
    revalidate: 60 * 60,
    props: {
      peoples: DirectoryMapper(data.diretorias),
      conselheiros: DirectoryMapper(data.conselheiros),
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
