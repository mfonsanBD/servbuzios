import client from 'graphql/client'
import NOTICIA_QUERY from 'graphql/queries/noticia'
import NEE_QUERY from 'graphql/queries/noticias'
import { GetStaticPaths, GetStaticProps } from 'next'
import NoticiaTemplate, { NoticiaTemplateProps } from 'templates/Noticia'

export default function Noticia(props: NoticiaTemplateProps) {
  return <NoticiaTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { noticias } = await client.request(NEE_QUERY)

  const paths = noticias.map((noticia: { slug: string }) => {
    return {
      params: {
        slug: noticia.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug

  const data = await client.request(NOTICIA_QUERY, { slug })

  return {
    revalidate: 60 * 60 * 24,
    props: {
      imagem: data.noticia.imagem.url,
      titulo: data.noticia.titulo,
      descricao: data.noticia.descricao,
      slug: data.noticia.slug,
      texto: data.noticia.texto.html,
      createdAt: data.noticia.createdAt,
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
