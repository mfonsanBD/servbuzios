import Link from 'next/link'
import { useState } from 'react'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import { MdMenu, MdClose } from 'react-icons/md'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MdMenu
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            size={32}
          />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo color="primary" />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink className="active">Início</S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink>Diretoria</S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink>Jurídico</S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink>Notícias & Editais</S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink>Documentos</S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink>Fale Conosco</S.MenuLink>
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
            <S.MenuLink className="active">Início</S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink>Diretoria</S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink>Jurídico</S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink>Notícias & Editais</S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink>Documentos</S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink>Fale Conosco</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
