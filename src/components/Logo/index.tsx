/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'primary'
  size?: 'small' | 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'primary',
  size = 'large',
  hideOnMobile = false
}: LogoProps) => {
  return (
    <S.Wrapper size={size} hideOnMobile={hideOnMobile}>
      <img
        id={id}
        src={color === 'white' ? '/img/logo-branco.svg' : '/img/logo-cor.svg'}
        alt="ServBúzios"
      />
    </S.Wrapper>
  )
}

export default Logo
