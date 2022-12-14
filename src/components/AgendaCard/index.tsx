import { RiCalendar2Line } from 'react-icons/ri'
import { DateAndTime } from 'utils/formatDate'
import * as S from './styles'

export type AgendaCardProps = {
  title: string
  date: string
}

const AgendaCard = ({ date, title }: AgendaCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.DateArea>
        <RiCalendar2Line /> {DateAndTime(date)}
      </S.DateArea>
    </S.Content>
  </S.Wrapper>
)

export default AgendaCard
