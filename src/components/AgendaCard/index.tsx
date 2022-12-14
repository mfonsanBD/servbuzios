/* eslint-disable @next/next/no-img-element */
import { DateAndTime } from 'utils/formatDate'
import * as S from './styles'

export type AgendaCardProps = {
  title: string
  date: string
}

const AgendaCard = ({ date, title }: AgendaCardProps) => (
  <S.Wrapper>
    <S.DateArea>{DateAndTime(date)}</S.DateArea>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default AgendaCard
