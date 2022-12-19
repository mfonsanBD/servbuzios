import { GetStaticProps } from 'next'
import NoticiasEEditaisTemplate, {
  NoticiasEEditaisTemplateProps
} from 'templates/NoticiasEEditais'

export default function NoticiasEEditais(props: NoticiasEEditaisTemplateProps) {
  return <NoticiasEEditaisTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      sindicatoName:
        'Sindicato dos Servidores Públicos Municipais de Armação dos Búzios',
      sindicatoCNPJ: '04.930.581/0001-11',
      sindicatoAddress:
        'Estrada da Usina, 350 - Loja 03 - Armação dos Búzios, RJ - 28950-785',
      phone: '(22) 97405-8388',
      email: 'servbuzios2022@gmail.com',
      redessociais: {
        facebook: 'string',
        instagram: 'string',
        telegram: 'string',
        whatsapp: 'string'
      },
      posts: [
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Edital'
        },
        {
          imagem: '/img/beach.jpg',
          titulo: 'Reunião Extraordinária',
          slug: 'reuniao-extraordinaria',
          createdAt: '2022-12-13T18:41:54.480Z',
          tipo: 'Noticia'
        }
      ]
    }
  }
}
