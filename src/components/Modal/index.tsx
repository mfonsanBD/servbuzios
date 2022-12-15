import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => <S.Wrapper>{children}</S.Wrapper>

export default Modal
