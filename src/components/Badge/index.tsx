import { FiCheck } from 'react-icons/fi'

import * as S from './styles'

export type BadgeProps = {
  children: React.ReactNode
  icon?: React.ReactNode
  inverted?: boolean
}

// Selo de seção: pílula com um círculo de ícone, usada acima dos títulos.
const Badge = ({ children, icon, inverted = false }: BadgeProps) => (
  <S.Wrapper $inverted={inverted}>
    <S.Icon aria-hidden="true">{icon ?? <FiCheck />}</S.Icon>
    {children}
  </S.Wrapper>
)

export default Badge
