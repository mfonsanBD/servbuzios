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
