import Image from 'next/image'

import * as S from './styles'

export type LogoProps = {
  color?: 'brown' | 'white' | 'dark'
}

const Logo = ({ color = 'white' }: LogoProps) => {
  return (
    <S.Wrapper>
      {color === 'white' ? (
        <Image width={80} height={80} src="/img/logo-white.svg" />
      ) : color === 'dark' ? (
        <Image width={80} height={80} src="/img/logo-dark.svg" />
      ) : (
        <Image width={80} height={80} src="/img/logo-brown.svg" />
      )}
    </S.Wrapper>
  )
}

export default Logo
