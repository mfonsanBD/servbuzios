import Image from 'next/image'

import * as S from './styles'

export type DirectoryCardProps = {
  name: string
  role: string
  featured?: boolean
  photo?: string | null
}

// Iniciais: primeira letra do primeiro e do último nome.
export const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return ''
  const first = parts[0].charAt(0)
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : ''
  return `${first}${last}`.toUpperCase()
}

const DirectoryCard = ({
  name,
  role,
  featured = false,
  photo = null
}: DirectoryCardProps) => (
  <S.Wrapper>
    <S.Tile $featured={featured} aria-hidden={photo ? undefined : 'true'}>
      {photo ? (
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center 30%"
          sizes="(max-width: 600px) 100vw, 420px"
        />
      ) : (
        getInitials(name)
      )}
    </S.Tile>
    <S.Content>
      <S.Name>{name}</S.Name>
      <S.Role>{role}</S.Role>
    </S.Content>
  </S.Wrapper>
)

export default DirectoryCard
