import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import { MdMenu, MdClose } from 'react-icons/md'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const route = useRouter()

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
            <S.MenuLink className={route.pathname === '/' ? 'active' : ''}>
              Início
            </S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink
              className={route.pathname === '/diretoria' ? 'active' : ''}
            >
              Diretoria
            </S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink
              className={route.pathname === '/juridico' ? 'active' : ''}
            >
              Jurídico
            </S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink
              className={
                route.pathname === '/noticias-e-editais' ? 'active' : ''
              }
            >
              Notícias & Editais
            </S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink
              className={route.pathname === '/documentos' ? 'active' : ''}
            >
              Documentos
            </S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink
              className={route.pathname === '/fale-conosco' ? 'active' : ''}
            >
              Fale Conosco
            </S.MenuLink>
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
            <S.MenuLink className={route.pathname === '/' ? 'active' : ''}>
              Início
            </S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink
              className={route.pathname === '/diretoria' ? 'active' : ''}
            >
              Diretoria
            </S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink
              className={route.pathname === '/juridico' ? 'active' : ''}
            >
              Jurídico
            </S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink
              className={
                route.pathname === '/noticias-e-editais' ? 'active' : ''
              }
            >
              Notícias & Editais
            </S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink
              className={route.pathname === '/documentos' ? 'active' : ''}
            >
              Documentos
            </S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink
              className={route.pathname === '/fale-conosco' ? 'active' : ''}
            >
              Fale Conosco
            </S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
