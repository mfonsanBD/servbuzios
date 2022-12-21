import Image from 'next/image'
import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  description: string
  slug: string
}

const Banner = ({ img, title, description, slug }: BannerProps) => (
  <S.Wrapper>
    <S.Cover>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.Cover>
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Description dangerouslySetInnerHTML={{ __html: description }} />
      <Button color="white" minimal as="a" href={`/noticia/${slug}`}>
        Leia Mais
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
