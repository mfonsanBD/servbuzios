const ADVOGADOS_QUERY = /* GraphQL */ `
  query Advogado {
    advogados {
      nome
      oab
      whatsapp
      foto {
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

export default ADVOGADOS_QUERY
