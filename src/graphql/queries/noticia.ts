const NOTICIA_QUERY = /* GraphQL */ `
  query Noticia($slug: String!) {
    noticia(where: { slug: $slug }) {
      titulo
      createdAt
      slug
      descricao
      imagem {
        url
      }
      texto {
        html
      }
    }
    outras: noticias(first: 4, orderBy: createdAt_DESC) {
      titulo
      descricao
      slug
      createdAt
      imagem {
        url
      }
    }
    dados {
      sindicatoName
      sindicatoCnpj
      sindicatoAddress
      phone
      email
      redesSociais {
        facebook
        instagram
        telegram
        whatsapp
      }
    }
  }
`

export default NOTICIA_QUERY
