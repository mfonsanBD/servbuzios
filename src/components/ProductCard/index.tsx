/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Image from 'next/image'
import * as S from './styles'

export type ProductCardProps = {
  image: string
  title: string
  slug: string
  description: string
}

const ProductCard = ({ image, title, slug, description }: ProductCardProps) => (
  <S.Wrapper>
    <S.ImageArea>
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </S.ImageArea>
    <S.Content>
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
      <Button as="a" href={`/${slug}`} fullWidth>
        Crie seu Comedouro
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
