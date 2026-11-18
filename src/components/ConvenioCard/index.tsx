import { useRef, useState } from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

import Modal from 'components/Modal'

import * as S from './styles'

export type ConvenioCardProps = {
  imagem: string
  empresa: string
}

const ConvenioCard = ({ imagem, empresa }: ConvenioCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openerRef = useRef<HTMLButtonElement>(null)

  const close = () => {
    setIsOpen(false)
    openerRef.current?.focus()
  }

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Art onClick={() => setIsOpen(true)}>
        <Image
          src={imagem}
          alt={`Arte do convênio ${empresa}`}
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </S.Art>

      <S.Body>
        <S.Name>{empresa}</S.Name>
        <S.Open ref={openerRef} type="button" onClick={() => setIsOpen(true)}>
          Ver condições
          <FiArrowRight aria-hidden="true" />
        </S.Open>
      </S.Body>

      {isOpen && (
        <Modal label={`Condições do convênio ${empresa}`} onClose={close}>
          <S.ModalFrame>
            <Image
              src={imagem}
              alt={`Arte do convênio ${empresa}`}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 768px) 90vw, 720px"
            />
          </S.ModalFrame>
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default ConvenioCard
