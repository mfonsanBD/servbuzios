import Link from 'next/link'

import Logo from 'components/Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.LogoFooterArea>
      <Link href="/" passHref>
        <a>
          <Logo color="brown" />
        </a>
      </Link>
    </S.LogoFooterArea>

    <S.Copyright>
      <S.Copy>&copy; Copyright 2022 - Todos os direitos reservados.</S.Copy>
      <S.CreatedBy>
        Desenvolvido por:{' '}
        <a href="https://mikedev.com.br" target="_blank" rel="noreferrer">
          Mike Santos
        </a>
      </S.CreatedBy>
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
