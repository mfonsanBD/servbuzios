/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
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
      <img src={image} alt={title} />
    </S.ImageArea>
    <S.Content>
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
      <Button as="a" href={`/modelo/${slug}`} fullWidth>
        Crie seu Comedouro
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
