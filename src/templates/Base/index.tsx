import Menu from 'components/Menu'
import Footer, { FooterProps } from 'components/Footer'

import * as S from './styles'
import ScrollToTop from 'react-scroll-to-top'

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

    <ScrollToTop smooth width="20" height="20" color="#1F4665" />
  </S.Wrapper>
)

export default Base
