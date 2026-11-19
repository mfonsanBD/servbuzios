import Image from 'next/image'

import Button from 'components/Button'
import { FormatWhatsAppLink } from 'utils/formatLinks'

import * as S from './styles'

export type AdvogadoCardProps = {
  nome: string
  oab: string
  whatsapp: string
  photo?: string | null
}

const PREFIX = /^\s*(advogad[oa]|dra?\.?)\s+/i

// Separa o prefixo ("Dr.", "Advogada"…) do nome e define o tratamento.
const parseNome = (nome: string) => {
  const match = nome.match(PREFIX)
  const prefix = match ? match[1].toLowerCase() : ''
  const clean = nome.replace(PREFIX, '').trim()
  const feminine =
    prefix === 'advogada' || prefix === 'dra' || prefix === 'dra.'

  return { clean, role: feminine ? 'Advogada' : 'Advogado' }
}

const getInitials = (nome: string) => {
  const words = nome.split(/\s+/).filter(Boolean)
  if (!words.length) return ''
  const first = words[0][0]
  const last = words.length > 1 ? words[words.length - 1][0] : ''
  return `${first}${last}`.toUpperCase()
}

const AdvogadoCard = ({
  nome,
  oab,
  whatsapp,
  photo = null
}: AdvogadoCardProps) => {
  const { clean, role } = parseNome(nome)

  return (
    <S.Wrapper>
      <S.Avatar aria-hidden={photo ? undefined : 'true'}>
        {photo ? (
          <Image
            src={photo}
            alt={clean}
            layout="fill"
            objectFit="cover"
            objectPosition="center 30%"
            sizes="64px"
          />
        ) : (
          getInitials(clean)
        )}
      </S.Avatar>

      <S.Info>
        <S.Nome>{clean}</S.Nome>
        <S.Oab>
          {role} · OAB/RJ {oab}
        </S.Oab>
        <S.Phone>{whatsapp}</S.Phone>
      </S.Info>

      <Button
        as="a"
        href={FormatWhatsAppLink(whatsapp)}
        target="_blank"
        rel="noreferrer"
      >
        Agendar pelo WhatsApp
      </Button>
    </S.Wrapper>
  )
}

export default AdvogadoCard
