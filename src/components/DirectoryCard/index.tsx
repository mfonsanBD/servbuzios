import * as S from './styles'

export type DirectoryCardProps = {
  name: string
  role: string
}

const DirectoryCard = ({ name, role }: DirectoryCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
    </S.Content>
  </S.Wrapper>
)

export default DirectoryCard
