const NEE_QUERY = /* GraphQL */ `
  query Noticia {
    noticias(orderBy: createdAt_DESC) {
      imagem {
        url
      }
      titulo
      slug
      createdAt
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

export default NEE_QUERY
