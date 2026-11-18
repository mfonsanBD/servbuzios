const DIRETORIA_QUERY = /* GraphQL */ `
  query Diretoria {
    diretorias {
      nome
      cargo
    }
    conselheiros {
      nome
      cargo
    }
    homesConnection {
      edges {
        node {
          presidentePhoto {
            url
          }
        }
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

export default DIRETORIA_QUERY
