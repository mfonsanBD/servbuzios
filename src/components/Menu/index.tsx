/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FiMenu, FiUser, FiX } from 'react-icons/fi'

import Button from 'components/Button'

import * as S from './styles'

export const MEMBER_AREA_URL = 'https://gestao.servbuzios.org.br'
export const SIGNUP_URL = 'https://gestao.servbuzios.org.br/cadastro'

export type MenuLinkItem = {
  href: string
  label: string
  fullLabel: string
  // prefixo de rota que também marca o link como ativo (ex.: /noticia/[slug])
  match?: string
}

export const MENU_LINKS: MenuLinkItem[] = [
  {
    href: '/diretoria-e-conselho',
    label: 'Diretoria',
    fullLabel: 'Diretoria e conselho'
  },
  { href: '/juridico', label: 'Jurídico', fullLabel: 'Jurídico' },
  {
    href: '/convenio',
    label: 'Convênios',
    fullLabel: 'Convênios e parcerias'
  },
  {
    href: '/documentos-e-editais',
    label: 'Documentos',
    fullLabel: 'Documentos e editais'
  },
  {
    href: '/noticias',
    label: 'Notícias',
    fullLabel: 'Notícias',
    match: '/noticia'
  },
  { href: '/fale-conosco', label: 'Fale conosco', fullLabel: 'Fale conosco' }
]

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname, asPath } = useRouter()

  const isActive = (link: MenuLinkItem) =>
    link.match ? pathname.startsWith(link.match) : pathname === link.href

  // fecha o menu móvel ao trocar de página
  useEffect(() => {
    setIsOpen(false)
  }, [asPath])

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <S.Inner>
        <Link href="/" passHref>
          <S.Brand aria-label="ServBúzios — página inicial">
            <img src="/img/logo-cor.svg" alt="" width={46} height={46} />
            <span>ServBúzios</span>
          </S.Brand>
        </Link>

        <S.DesktopNav aria-label="Navegação principal">
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <S.NavLink aria-current={isActive(link) ? 'page' : undefined}>
                {link.label}
              </S.NavLink>
            </Link>
          ))}
        </S.DesktopNav>

        <S.Actions>
          <S.DesktopOnly>
            <Button
              as="a"
              href={MEMBER_AREA_URL}
              target="_blank"
              rel="noreferrer"
              color="white"
              size="medium"
            >
              <FiUser aria-hidden="true" />
              Área do associado
            </Button>
          </S.DesktopOnly>

          <Button
            as="a"
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            size="medium"
          >
            Associe-se
          </Button>

          <S.Toggle
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            aria-controls="menu-movel"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu aria-hidden="true" />
          </S.Toggle>
        </S.Actions>
      </S.Inner>

      <S.MobileMenu
        id="menu-movel"
        aria-label="Menu"
        aria-hidden={!isOpen}
        $isOpen={isOpen}
      >
        <S.MobileTop>
          <span>Menu</span>
          <S.Close
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          >
            <FiX aria-hidden="true" />
          </S.Close>
        </S.MobileTop>

        <S.MobileLinks>
          <Link href="/" passHref>
            <S.MobileLink aria-current={pathname === '/' ? 'page' : undefined}>
              Início
            </S.MobileLink>
          </Link>
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <S.MobileLink aria-current={isActive(link) ? 'page' : undefined}>
                {link.fullLabel}
              </S.MobileLink>
            </Link>
          ))}
        </S.MobileLinks>

        <S.MobileButtons>
          <Button
            as="a"
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            color="accent"
            size="large"
            fullWidth
          >
            Quero ser associado
          </Button>
          <Button
            as="a"
            href={MEMBER_AREA_URL}
            target="_blank"
            rel="noreferrer"
            color="white"
            size="large"
            fullWidth
          >
            <FiUser aria-hidden="true" />
            Área do associado
          </Button>
        </S.MobileButtons>
      </S.MobileMenu>
    </S.Wrapper>
  )
}

export default Menu
