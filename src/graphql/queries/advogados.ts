const ADVOGADOS_QUERY = /* GraphQL */ `
  query Advogado {
    advogados {
      nome
      oab
      whatsapp
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
