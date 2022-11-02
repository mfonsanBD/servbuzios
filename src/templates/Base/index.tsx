import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Menu />

    <S.Content>{children}</S.Content>

    <Footer />
  </S.Wrapper>
)

export default Base
