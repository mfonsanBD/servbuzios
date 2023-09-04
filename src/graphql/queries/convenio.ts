const HOME_CONVENIO = /* GraphQL */ `
  query Convenio {
    convenios(first: 1000) {
      empresa
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

export default HOME_CONVENIO
