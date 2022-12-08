/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Logo from 'components/Logo'
import ComedourosModal from 'components/Modal'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'
import { MdMenu, MdClose } from 'react-icons/md'
import { RiWhatsappLine, RiInstagramLine } from 'react-icons/ri'
import Image from 'next/image'

export type MenuPros = {
  logoColor?: 'brown' | 'white' | 'dark'
}

const Menu = ({ logoColor = 'white' }: MenuPros) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModalIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <S.SocialMedias>
            <Link href="https://www.instagram.com/comedouroswoof/" passHref>
              <S.MenuLink target="_blank" title="Instagram">
                <RiInstagramLine size={32} />
              </S.MenuLink>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=5521969572953"
              passHref
            >
              <S.MenuLink target="_blank" title="WhatsApp">
                <RiWhatsappLine size={32} />
              </S.MenuLink>
            </Link>
          </S.SocialMedias>
          <MdMenu
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            size={32}
          />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo color={logoColor} />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Início</S.MenuLink>
          </Link>

          <Link href="/a-woof" passHref>
            <S.MenuLink>A Woof</S.MenuLink>
          </Link>

          <S.Button onClick={() => setModalIsOpen(true)}>Comedouros</S.Button>
          {modalIsOpen && (
            <ComedourosModal>
              <S.ModalContent>
                <S.ModalHeader>
                  <S.ModalTitle>
                    Qual modelo de Comedouro você deseja?
                  </S.ModalTitle>
                  <MdClose size={28} onClick={() => setModalIsOpen(false)} />
                </S.ModalHeader>

                <S.ModalMain>
                  <Link href="/modelo-curve" passHref>
                    <S.Box>
                      <Image
                        width={70}
                        height={45}
                        src="/img/types/curve-unit-dark.svg"
                        alt="Silhueta do Comedouro Curve"
                      />
                      <h2>Curve</h2>
                    </S.Box>
                  </Link>

                  <Link href="/modelo-flat" passHref>
                    <S.Box>
                      <Image
                        width={70}
                        height={45}
                        src="/img/types/flat-unit-dark.svg"
                        alt="Silhueta do Comedouro Flat"
                      />
                      <h2>Flat</h2>
                    </S.Box>
                  </Link>
                </S.ModalMain>
              </S.ModalContent>
            </ComedourosModal>
          )}

          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>

          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>

          <S.SocialMedias>
            <Link href="https://www.instagram.com/comedouroswoof/" passHref>
              <S.MenuLink target="_blank" title="Instagram">
                <RiInstagramLine size={28} />
              </S.MenuLink>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=5521969572953"
              passHref
            >
              <S.MenuLink target="_blank" title="WhatsApp">
                <RiWhatsappLine size={28} />
              </S.MenuLink>
            </Link>
          </S.SocialMedias>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <MdClose
          size={32}
          aria-label="Close Menu"
          onClick={() => setIsOpen(false)}
        />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Início</S.MenuLink>
          </Link>

          <Link href="/a-woof" passHref>
            <S.MenuLink>A Woof</S.MenuLink>
          </Link>

          <Link href="/blog" passHref>
            <S.MenuLink>Blog</S.MenuLink>
          </Link>

          <Link href="/contato" passHref>
            <S.MenuLink>Contato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
