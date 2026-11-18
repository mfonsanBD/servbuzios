import Image from 'next/image'
import Link from 'next/link'

import { IsoDay, LongDate } from 'utils/formatDate'

import * as S from './styles'

export type NewsCardProps = {
  imagem: string
  titulo: string
  slug: string
  createdAt: string
  descricao?: string
}

const NewsCard = ({ createdAt, imagem, slug, titulo }: NewsCardProps) => (
  <S.Wrapper>
    {/* a arte repete o título: o link da imagem fica fora da ordem de tabulação */}
    <Link href={`/noticia/${slug}`} passHref>
      <S.Cover tabIndex={-1} aria-hidden="true">
        <Image
          src={imagem}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </S.Cover>
    </Link>

    <S.Content>
      <S.CreatedAt dateTime={IsoDay(createdAt)}>
        {LongDate(createdAt)}
      </S.CreatedAt>

      <Link href={`/noticia/${slug}`} passHref>
        <S.Title>{titulo}</S.Title>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default NewsCard
