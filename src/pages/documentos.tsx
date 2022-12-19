import { GetStaticProps } from 'next'
import DocumentosTemplate, {
  DocumentosTemplateProps
} from 'templates/Documentos'

export default function Documentos(props: DocumentosTemplateProps) {
  return <DocumentosTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    // revalidate: 60 * 60 * 24,
    revalidate: 10,
    props: {
      items: [
        { documento: 'Documento 01', arquivo: '#' },
        { documento: 'Documento 02', arquivo: '#' },
        { documento: 'Documento 03', arquivo: '#' },
        { documento: 'Documento 04', arquivo: '#' },
        { documento: 'Documento 05', arquivo: '#' },
        { documento: 'Documento 06', arquivo: '#' }
      ],
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
      }
    }
  }
}
