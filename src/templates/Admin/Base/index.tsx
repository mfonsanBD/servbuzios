import MenuAdmin from 'components/MenuAdmin'
import * as S from './styles'

export type AdminBaseProps = {
  username: string
  photo: string
  children: React.ReactNode
}

const AdminBase = ({ children, photo, username }: AdminBaseProps) => {
  return (
    <S.Wrapper>
      <MenuAdmin username={username} photo={photo} />

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  )
}

export default AdminBase
