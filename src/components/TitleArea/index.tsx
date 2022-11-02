import * as S from './styles'

export type TitleAreaProps = {
  title: string
}

const TitleArea = ({ title }: TitleAreaProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.NavArea>
        <S.Link href="/">Página Inicial</S.Link>
        <S.Divider>|</S.Divider>
        <S.NavTitle>{title}</S.NavTitle>
      </S.NavArea>
    </S.Content>
  </S.Wrapper>
)

export default TitleArea
