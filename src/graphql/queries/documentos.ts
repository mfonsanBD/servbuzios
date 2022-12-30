const DOCUMENTOS_QUERY = /* GraphQL */ `
  query Documentos {
    documentos(first: 20) {
      titulo
      imagem {
        url
      }
      arquivo {
        url
      }
    }
    editais(first: 20) {
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
