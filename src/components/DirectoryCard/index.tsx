import * as S from './styles'

export type DirectoryCardProps = {
  photo: string
  name: string
  role: string
}

const DirectoryCard = ({ name, photo, role }: DirectoryCardProps) => (
  <S.Wrapper photo={photo}>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
    </S.Content>
  </S.Wrapper>
)

export default DirectoryCard
