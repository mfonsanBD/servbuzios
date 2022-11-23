import * as S from './styles'

export type ComedouroModalProps = {
  children: React.ReactNode
}

const ComedourosModal = ({ children }: ComedouroModalProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default ComedourosModal
