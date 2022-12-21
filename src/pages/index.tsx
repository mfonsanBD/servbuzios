import { GetStaticProps } from 'next'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import client from 'graphql/client'
import HOME_QUERY from 'graphql/queries/home'
import {
  AgendaMapper,
  BannerMapper,
  ConvenioMapper,
  NewsMapper
} from 'utils/mappers'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const TODAY = new Date().toISOString()

  const {
    homesConnection: { edges }
  } = await client.request(HOME_QUERY, { date: TODAY })

  const home = edges[0].node

  return {
    revalidate: 60 * 60,
    props: {
      banner: BannerMapper(home.noticias),
      presidenteName: home.presidenteName,
      presidenteImage: home.presidentePhoto.url,
      presidenteText: home.presidenteText.html,
      agenda: AgendaMapper(home.agendas),
      news: NewsMapper(home.noticias),
      sindicatoImage: home.sindicatoImage.url,
      sindicatoText: home.sindicatoText.html,
      convenios: ConvenioMapper(home.convenios),
      sindicatoName: home.dado.sindicatoName,
      sindicatoCNPJ: home.dado.sindicatoCnpj,
      sindicatoAddress: home.dado.sindicatoAddress,
      phone: home.dado.phone,
      email: home.dado.email,
      redessociais: {
        facebook: home.dado.redesSociais.facebook,
        instagram: home.dado.redesSociais.instagram,
        telegram: home.dado.redesSociais.telegram,
        whatsapp: home.dado.redesSociais.whatsapp
      }
    }
  }
}
