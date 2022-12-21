import Image from 'next/image'
import { NextSeo } from 'next-seo'

import { FooterProps } from 'components/Footer'

import Base from 'templates/Base'

import { NewsDate } from 'utils/formatDate'

import { SITE_NAME } from 'pages/_app'

import * as S from './styles'

export type NoticiaTemplateProps = {
  imagem: string
  titulo: string
  descricao: string
  slug: string
  texto: string
  createdAt: string
} & FooterProps

const NoticiaTemplate = ({
  createdAt,
  descricao,
  imagem,
  slug,
  texto,
  titulo,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: NoticiaTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: ${titulo}`}
      description={descricao}
      canonical={`https://servbuzios.org.br/noticia/${slug}`}
      openGraph={{
        url: `https://servbuzios.org.br/noticia/${slug}`,
        title: `${SITE_NAME} :: ${titulo}`,
        description: descricao,
        images: [
          {
            url: imagem,
            alt: descricao
          }
        ]
      }}
    />

    <S.Wrapper>
      <S.Cover>
        <Image src={imagem} alt={titulo} layout="fill" objectFit="cover" />
      </S.Cover>

      <div>
        <S.Title>{titulo}</S.Title>
        <S.PostedOn>Postado em: {NewsDate(createdAt)}</S.PostedOn>
      </div>

      <S.Text dangerouslySetInnerHTML={{ __html: texto }} />
    </S.Wrapper>
  </Base>
)

export default NoticiaTemplate
