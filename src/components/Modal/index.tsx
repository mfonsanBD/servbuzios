import { useEffect, useRef } from 'react'
import { FiX } from 'react-icons/fi'

import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  /** texto lido por leitores de tela ao abrir o diálogo */
  label?: string
  onClose?: () => void
}

// Diálogo em tela cheia. Fecha com Escape, clique no fundo ou no botão de fechar;
// o foco vai para o botão de fechar ao abrir e volta para quem abriu ao fechar.
const Modal = ({ children, label = 'Janela', onClose }: ModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current?.()
      } else if (event.key === 'Tab') {
        // o botão de fechar é o único controle do diálogo: mantém o foco nele
        event.preventDefault()
        closeRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (opener && opener !== document.body) opener.focus()
    }
  }, [])

  // atenção: ancestrais com transform quebram o position: fixed (veja ConvenioCard)
  return (
    <S.Wrapper
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose?.()
      }}
    >
      <S.Close
        ref={closeRef}
        type="button"
        aria-label="Fechar"
        onClick={onClose}
      >
        <FiX aria-hidden="true" />
      </S.Close>

      {children}
    </S.Wrapper>
  )
}

export default Modal
