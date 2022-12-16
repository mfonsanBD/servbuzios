import { GetStaticProps } from 'next'

import bannerMock from 'components/BannerSlider/mock'
import agendaMock from 'components/AgendaCardSlider/mock'
import conveniosMock from 'components/ConvenioCardSlider/mock'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      banner: bannerMock,
      presidenteName: 'Flavio Neves',
      presidenteImage: '/img/photo.jpg',
      presidenteTitle: 'Fala Presidente!',
      presidenteText:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, repudiandae! Neque dicta fuga, ullam, eligendi explicabo delectus aliquid amet quibusdam et minima quae? Voluptatum suscipit beatae tempora maiores laborum veniam?',
      agenda: agendaMock,
      news: [
        {
          image: '/img/beach.jpg',
          title: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          isNotice: true
        },
        {
          image: '/img/beach.jpg',
          title: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          isNotice: false
        },
        {
          image: '/img/beach.jpg',
          title: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          isNotice: true
        }
      ],
      sindicatoImage: '/img/sindicato.jpg',
      sindicatoText:
        'A Constituição Federal brasileira de 1988 reconhece ao cidadão o direito à sindicalização, à greve, à luta pela dignidade, e afirma que “ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, inclusive em questões judiciais ou administrativas”. A CF de 88 estendeu o direito à sindicalização também para os servidores públicos federais, antes garantido somente para os trabalhadores da iniciativa privada.\n\nPortanto, cabe ao sindicato negociar e buscar a organização coletiva, intervir legalmente em ações judiciais e participar da elaboração da legislação laboral, tratando dos problemas coletivos que surgem decorrentes do exercício da profissão. Assim, as ações do sindicato de classe contribuem não apenas para a defesa do próprio interesse do seu filiado, como para o desenvolvimento da sociedade. Sindicalizar-se significa unir-se, organizar-se, estruturar-se, fortalecer-se com sua categoria, para defesa de seus interesses e da coletividade.',
      convenios: conveniosMock,
      sindicatoName:
        'Sindicato dos Servidores Públicos Municipais de Armação dos Búzios',
      sindicatoCNPJ: '04.930.581/0001-11',
      sindicatoAddress:
        'Estrada da Usina, 350 - Loja 03 - Armação dos Búzios, RJ - 28950-785'
    }
  }
}
