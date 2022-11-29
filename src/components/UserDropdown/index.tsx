/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'

import { TbChevronDown, TbLogout } from 'react-icons/tb'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
  photo: string
}

const UserDropdown = ({ username, photo }: UserDropdownProps) => {
  const { push } = useRouter()
  return (
    <Dropdown
      title={
        <S.Username>
          <S.ImageBox>
            <img src={photo} alt={username} />
          </S.ImageBox>
          {username}
          <TbChevronDown size={24} />
        </S.Username>
      }
    >
      <S.Nav>
        <S.Link
          role="button"
          onClick={async () => {
            const data = await signOut({
              redirect: false,
              callbackUrl: '/admin'
            })
            push(data.url)
          }}
          title="Sair"
        >
          <TbLogout size={24} />
          <span>Sair</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
