import Link from 'next/link'
import { useState } from 'react'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import { MdMenu, MdClose } from 'react-icons/md'

export type MenuPros = {
  logoColor?: 'brown' | 'white' | 'dark'
}

const Menu = ({ logoColor = 'white' }: MenuPros) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MdMenu aria-label="Open Menu" size={32} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo color={logoColor} />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Inicio</S.MenuLink>
          </Link>

          <Link href="/a-woof" passHref>
            <S.MenuLink>A Woof</S.MenuLink>
          </Link>

          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>

          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose
          size={32}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Inicio</S.MenuLink>
          </Link>

          <Link href="/a-woof" passHref>
            <S.MenuLink>A Woof</S.MenuLink>
          </Link>

          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>

          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
