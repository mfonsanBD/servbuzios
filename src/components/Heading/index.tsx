import * as S from './styles'

export type HeadingProps = {
  title: string
  backgroundTitle: string
  subtitle?: string
}

const Heading = ({ title, backgroundTitle, subtitle = '' }: HeadingProps) => (
  <S.Wrapper>
    <S.Title backgroundTitle={backgroundTitle}>{title}</S.Title>
    {!!subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
  </S.Wrapper>
)

export default Heading
