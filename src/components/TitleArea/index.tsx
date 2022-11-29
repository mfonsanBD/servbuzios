import * as S from './styles'

export type TitleAreaProps = {
  title: string
  subTitle?: string
  subTitleUrl?: string
}

const TitleArea = ({ title, subTitle, subTitleUrl }: TitleAreaProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.NavArea>
        <S.Link href="/">Página Inicial</S.Link>
        <S.Divider>|</S.Divider>
        {subTitle && (
          <>
            <S.Link href={subTitleUrl}>{subTitle}</S.Link>
            <S.Divider>|</S.Divider>
          </>
        )}
        <S.NavTitle>{title}</S.NavTitle>
      </S.NavArea>
    </S.Content>
  </S.Wrapper>
)

export default TitleArea
