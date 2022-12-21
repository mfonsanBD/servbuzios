import client from 'graphql/client'
import NEE_QUERY from 'graphql/queries/noticias'
import { GetStaticProps } from 'next'
import NoticiasEEditaisTemplate, {
  NoticiasEEditaisTemplateProps
} from 'templates/NoticiasEEditais'
import { NewsMapper } from 'utils/mappers'

export default function NoticiasEEditais(props: NoticiasEEditaisTemplateProps) {
  return <NoticiasEEditaisTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(NEE_QUERY)

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
      posts: NewsMapper(data.noticias)
    }
  }
}
