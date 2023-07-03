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
          <Link href="/diretoria-e-conselho" passHref>
            <S.MenuLink
              className={
                route.pathname === '/diretoria-e-conselho' ? 'active' : ''
              }
            >
              Diretoria & Conselho
            </S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink
              className={route.pathname === '/juridico' ? 'active' : ''}
            >
              Jurídico
            </S.MenuLink>
          </Link>

          <Link href="/convenio" passHref>
            <S.MenuLink
              className={route.pathname === '/convenio' ? 'active' : ''}
            >
              Convênios & Parcerias
            </S.MenuLink>
          </Link>

          <Link href="/documentos-e-editais" passHref>
            <S.MenuLink
              className={
                route.pathname === '/documentos-e-editais' ? 'active' : ''
              }
            >
              Documentos & Editais
            </S.MenuLink>
          </Link>

          <Link href="/noticias" passHref>
            <S.MenuLink
              className={route.pathname.includes('noticia') ? 'active' : ''}
            >
              Notícias
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
          <Link href="/diretoria-e-conselho" passHref>
            <S.MenuLink
              className={
                route.pathname === '/diretoria-e-conselho' ? 'active' : ''
              }
            >
              Diretoria & Conselho
            </S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink
              className={route.pathname === '/juridico' ? 'active' : ''}
            >
              Jurídico
            </S.MenuLink>
          </Link>

          <Link href="/convenio" passHref>
            <S.MenuLink
              className={route.pathname === '/convenio' ? 'active' : ''}
            >
              Convênios & Parcerias
            </S.MenuLink>
          </Link>

          <Link href="/documentos-e-editais" passHref>
            <S.MenuLink
              className={
                route.pathname === '/documentos-e-editais' ? 'active' : ''
              }
            >
              Documentos & Editais
            </S.MenuLink>
          </Link>

          <Link href="/noticias" passHref>
            <S.MenuLink
              className={route.pathname.includes('noticia') ? 'active' : ''}
            >
              Notícias
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
