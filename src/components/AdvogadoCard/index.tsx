import { FormatWhatsAppLink } from 'utils/formatLinks'
import * as S from './styles'

export type AdvogadoCardProps = {
  nome: string
  oab: string
  whatsapp: string
}

const AdvogadoCard = ({ nome, oab, whatsapp }: AdvogadoCardProps) => {
  return (
    <S.Wrapper>
      <S.Nome>{nome}</S.Nome>

      <S.Oab>OAB/RJ: {oab}</S.Oab>

      <S.ButtonsArea>
        <S.AgendaButton
          className="whatsapp"
          href={FormatWhatsAppLink(whatsapp)}
          target="_blank"
        >
          Agendar Pelo WhatsApp
        </S.AgendaButton>
      </S.ButtonsArea>
    </S.Wrapper>
  )
}

export default AdvogadoCard
