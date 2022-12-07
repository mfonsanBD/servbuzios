import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Logo from 'components/Logo'
import { MenuPros } from 'components/Menu'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'

import { MdClose, MdMenu } from 'react-icons/md'

import * as S from './styles'

export type MenuAdminProps = {
  username: string
  photo: string
} & MenuPros

const MenuAdmin = ({ logoColor = 'dark', username, photo }: MenuAdminProps) => {
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
        <Link href="/admin/app" passHref>
          <a>
            <Logo color={logoColor} />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/admin/app" passHref>
            <S.MenuLink
              className={route.asPath.includes('app') ? 'active' : ''}
            >
              Posts
            </S.MenuLink>
          </Link>

          <Link href="/admin/categorias" passHref>
            <S.MenuLink
              className={route.asPath.includes('categorias') ? 'active' : ''}
            >
              Categorias
            </S.MenuLink>
          </Link>

          <UserDropdown username={username} photo={photo} />
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose
          size={32}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />

        <S.MenuNav>
          <Link href="/admin/app" passHref>
            <S.MenuLink>Posts</S.MenuLink>
          </Link>

          <Link href="/admin/categorias" passHref>
            <S.MenuLink>Categorias</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default MenuAdmin
