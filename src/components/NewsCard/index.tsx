/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { NewsDate } from 'utils/formatDate'

import * as S from './styles'

export type NewsCardProps = {
  imagem: string
  titulo: string
  slug: string
  createdAt: string
}

const NewsCard = ({ createdAt, imagem, slug, titulo }: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageAndBadge>
      <S.Cover>
        <Image src={imagem} alt={titulo} layout="fill" />
      </S.Cover>
    </S.ImageAndBadge>

    <S.Content>
      <Link href={`/noticia/${slug}`} passHref>
        <S.Title>{titulo}</S.Title>
      </Link>

      <S.CreatedAt>Postado em: {NewsDate(createdAt)}</S.CreatedAt>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
