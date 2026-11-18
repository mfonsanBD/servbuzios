import Badge from 'components/Badge'

import * as S from './styles'

export type HeadingProps = {
  title: string
  /** Legado do layout antigo: não é mais renderizado. */
  backgroundTitle?: string
  subtitle?: string
  align?: 'left' | 'center'
  badge?: string
  badgeIcon?: React.ReactNode
  inverted?: boolean
}

// Título de seção (h2) com selo e texto de apoio opcionais.
const Heading = ({
  title,
  subtitle = '',
  align = 'center',
  badge,
  badgeIcon,
  inverted = false
}: HeadingProps) => (
  <S.Wrapper $align={align}>
    {!!badge && (
      <Badge icon={badgeIcon} inverted={inverted}>
        {badge}
      </Badge>
    )}
    <S.Title $inverted={inverted}>{title}</S.Title>
    {!!subtitle && <S.Subtitle $inverted={inverted}>{subtitle}</S.Subtitle>}
  </S.Wrapper>
)

export default Heading
