import { useEffect, useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title role="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Dropdown
