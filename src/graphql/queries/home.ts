const HOME_QUERY = /* GraphQL */ `
  query Home($date: DateTime!) {
    homesConnection {
      edges {
        node {
          presidenteText {
            html
          }
          presidenteName
          sindicatoImage {
            url
          }
          sindicatoText {
            html
          }
          presidentePhoto {
            url
          }
          dado {
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
          agendas(where: { data_gte: $date }, orderBy: id_ASC) {
            titulo
            data
          }
          noticias(first: 3, orderBy: createdAt_DESC) {
            titulo
            descricao
            imagem {
              url
            }
            slug
            createdAt
          }
          convenios(first: 1000) {
            empresa
            imagem {
              url
            }
          }
        }
      }
    }
    ultimasNoticias: noticias(first: 6, orderBy: createdAt_DESC) {
      titulo
      descricao
      imagem {
        url
      }
      slug
      createdAt
    }
    conveniosConnection {
      aggregate {
        count
      }
    }
  }
`

export default HOME_QUERY
