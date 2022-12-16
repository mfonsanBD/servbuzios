import Menu from 'components/Menu'
import Footer, { FooterProps } from 'components/Footer'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
} & FooterProps

const Base = ({
  children,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: BaseProps) => (
  <S.Wrapper>
    <Menu />

    <S.Content>{children}</S.Content>

    <Footer
      sindicatoAddress={sindicatoAddress}
      sindicatoCNPJ={sindicatoCNPJ}
      sindicatoName={sindicatoName}
      email={email}
      phone={phone}
      redessociais={redessociais}
    />
  </S.Wrapper>
)

export default Base
