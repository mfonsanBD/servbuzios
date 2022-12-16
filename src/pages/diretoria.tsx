import { GetStaticProps } from 'next'
import DiretoriaTemplate, { DiretoriaTemplateProps } from 'templates/Diretoria'

export default function Diretoria(props: DiretoriaTemplateProps) {
  return <DiretoriaTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      peoples: [
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        },
        {
          photo: '/img/photo.jpg',
          name: 'Nome Completo',
          role: 'Tesoureiro'
        }
      ],
      sindicatoName:
        'Sindicato dos Servidores Públicos Municipais de Armação dos Búzios',
      sindicatoCNPJ: '04.930.581/0001-11',
      sindicatoAddress:
        'Estrada da Usina, 350 - Loja 03 - Armação dos Búzios, RJ - 28950-785'
    }
  }
}
