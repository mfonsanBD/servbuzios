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
  sindicatoName
}: BaseProps) => (
  <S.Wrapper>
    <Menu />

    <S.Content>{children}</S.Content>

    <Footer
      sindicatoAddress={sindicatoAddress}
      sindicatoCNPJ={sindicatoCNPJ}
      sindicatoName={sindicatoName}
    />
  </S.Wrapper>
)

export default Base
