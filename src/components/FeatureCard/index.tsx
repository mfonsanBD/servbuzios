import * as S from './styles'

export type FeatureCardProps = {
  icon: JSX.Element
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <S.Wrapper>
    {icon}
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default FeatureCard
