const DOCUMENTOS_QUERY = /* GraphQL */ `
  query Documentos {
    documentos(first: 100000) {
      titulo
      createdAt
      imagem {
        url
      }
      arquivo {
        url
      }
    }
    editais(first: 100000) {
      titulo
      createdAt
      imagem {
        url
      }
      arquivo {
        url
      }
    }
    jornais(first: 100000) {
      createdAt
      imagem {
        url
      }
      arquivo {
        url
      }
    }
    leis(first: 100000) {
      createdAt
      titulo
      imagem {
        url
      }
      arquivo {
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

export default DOCUMENTOS_QUERY
