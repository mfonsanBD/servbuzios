import Link from 'next/link'

import Logo from 'components/Logo'

import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTelegramFill
} from 'react-icons/ri'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterArea>
        <Link href="/" passHref>
          <a>
            <Logo size="large" color="white" />
          </a>
        </Link>

        <S.FooterTopBlock>
          <h4>Menu do Site</h4>

          <Link href="/" passHref>
            <S.MenuLink className="active">Início</S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink>Diretoria</S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink>Jurídico</S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink>Notícias & Editais</S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink>Documentos</S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink>Fale Conosco</S.MenuLink>
          </Link>
        </S.FooterTopBlock>

        <S.FooterTopBlock>
          <h4>Informações de Contato</h4>

          <Link href="tel:22 97405-8388" passHref>
            <S.MenuLink target="_blank">(22) 97405-8388</S.MenuLink>
          </Link>

          <Link href="malto:servbuzios2022@gmail.com" passHref>
            <S.MenuLink target="_blank">servbuzios2022@gmail.com</S.MenuLink>
          </Link>
        </S.FooterTopBlock>

        <S.FooterTopBlock>
          <h4>Acompanhe nas Redes Sociais</h4>

          <S.SocialMedias>
            <Link
              href="https://chat.whatsapp.com/JOWAP2X0YXkGDJVVlYhimz"
              passHref
            >
              <S.MenuLink target="_blank" title="WhatsApp">
                <RiWhatsappLine size={32} />
              </S.MenuLink>
            </Link>

            <Link href="https://www.facebook.com/uniaoevalorizacao/" passHref>
              <S.MenuLink target="_blank" title="Facebook">
                <RiFacebookCircleFill size={32} />
              </S.MenuLink>
            </Link>

            <Link href="https://www.instagram.com/servbuzios" passHref>
              <S.MenuLink target="_blank" title="Instagram">
                <RiInstagramLine size={32} />
              </S.MenuLink>
            </Link>

            <Link href="https://t.me/uniaoevalorizacao" passHref>
              <S.MenuLink target="_blank" title="Telegram">
                <RiTelegramFill size={32} />
              </S.MenuLink>
            </Link>
          </S.SocialMedias>
        </S.FooterTopBlock>
      </S.FooterArea>

      <S.Copyright>
        <S.Copy>&copy; Copyright 2022 - Todos os direitos reservados.</S.Copy>
        <S.CreatedBy>
          Desenvolvido por:{' '}
          <a href="https://mikedev.com.br" target="_blank" rel="noreferrer">
            Mike Santos
          </a>
        </S.CreatedBy>
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
