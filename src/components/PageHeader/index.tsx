import Badge from 'components/Badge'
import { Container } from 'styles/shared'

import * as S from './styles'

export type PageHeaderProps = {
  badge: string
  badgeIcon?: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
}

// Cabeçalho centralizado das páginas internas: selo, h1, texto de apoio e extras.
const PageHeader = ({
  badge,
  badgeIcon,
  title,
  description,
  children
}: PageHeaderProps) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <Badge icon={badgeIcon}>{badge}</Badge>
        <S.Title>{title}</S.Title>
        {!!description && <S.Description>{description}</S.Description>}
        {children}
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default PageHeader
