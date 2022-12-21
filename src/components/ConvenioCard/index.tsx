/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'

import * as S from './styles'
import Modal from 'components/Modal'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'

export type ConvenioCardProps = {
  imagem: string
  empresa: string
}

const ConvenioCard = ({ imagem, empresa }: ConvenioCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])
  return (
    <S.Wrapper>
      <S.ClickedArea onClick={() => setIsOpen(true)}>
        <Image src={imagem} alt={empresa} layout="fill" />
      </S.ClickedArea>

      {isOpen && (
        <Modal>
          <S.CloseButton onClick={() => setIsOpen(false)}>
            <MdClose size={28} />
          </S.CloseButton>

          <S.ModalMain>
            <Image src={imagem} alt={empresa} layout="fill" />
          </S.ModalMain>
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default ConvenioCard
