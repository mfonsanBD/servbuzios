/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

import { NewsDate } from 'utils/formatDate'

import * as S from './styles'

export type NewsCardProps = {
  image: string
  title: string
  slug: string
  isNotice: boolean
  createdAt: string
}

const NewsCard = ({
  createdAt,
  image,
  isNotice,
  slug,
  title
}: NewsCardProps) => (
  <S.Wrapper>
    <S.ImageAndBadge>
      <S.Cover>
        <Image src={image} alt={title} layout="fill" />
      </S.Cover>
      <S.Badge isNotice={isNotice}>{isNotice ? 'Notícia' : 'Edital'}</S.Badge>
    </S.ImageAndBadge>

    <S.Content>
      <Link href={`/noticia/${slug}`} passHref>
        <S.Title>{title}</S.Title>
      </Link>

      <S.CreatedAt>Postado em: {NewsDate(createdAt)}</S.CreatedAt>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
