import Link from 'next/link'

import Logo from 'components/Logo'

import {
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTelegramFill
} from 'react-icons/ri'

import * as S from './styles'
import { useRouter } from 'next/router'

export type SocialMedias = {
  facebook: string
  instagram: string
  telegram: string
  whatsapp: string
}

export type FooterProps = {
  sindicatoName: string
  sindicatoCNPJ: string
  sindicatoAddress: string
  phone: string
  email: string
  redessociais: SocialMedias
}

const Footer = ({
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: FooterProps) => {
  const route = useRouter()

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
            <S.MenuLink className={route.pathname === '/' ? 'active' : ''}>
              Início
            </S.MenuLink>
          </Link>

          <Link href="/diretoria" passHref>
            <S.MenuLink
              className={route.pathname === '/diretoria' ? 'active' : ''}
            >
              Diretoria
            </S.MenuLink>
          </Link>

          <Link href="/juridico" passHref>
            <S.MenuLink
              className={route.pathname === '/juridico' ? 'active' : ''}
            >
              Jurídico
            </S.MenuLink>
          </Link>

          <Link href="/noticias-e-editais" passHref>
            <S.MenuLink
              className={
                route.pathname === '/noticias-e-editais' ? 'active' : ''
              }
            >
              Notícias & Editais
            </S.MenuLink>
          </Link>

          <Link href="/documentos" passHref>
            <S.MenuLink
              className={route.pathname === '/documentos' ? 'active' : ''}
            >
              Documentos
            </S.MenuLink>
          </Link>

          <Link href="/fale-conosco" passHref>
            <S.MenuLink
              className={route.pathname === '/fale-conosco' ? 'active' : ''}
            >
              Fale Conosco
            </S.MenuLink>
          </Link>
        </S.FooterTopBlock>

        <S.FooterTopBlock>
          <h4>Informações de Contato</h4>

          <Link href={`tel:${phone}`} passHref>
            <S.MenuLink target="_blank">{phone}</S.MenuLink>
          </Link>

          <Link href={`mailto:${email}`} passHref>
            <S.MenuLink target="_blank">{email}</S.MenuLink>
          </Link>
        </S.FooterTopBlock>

        <S.FooterTopBlock>
          <h4>Acompanhe nas Redes Sociais</h4>

          <S.SocialMedias>
            <Link href={redessociais.whatsapp} passHref>
              <S.MenuLink target="_blank" title="WhatsApp">
                <RiWhatsappLine size={32} />
              </S.MenuLink>
            </Link>

            <Link href={redessociais.facebook} passHref>
              <S.MenuLink target="_blank" title="Facebook">
                <RiFacebookCircleFill size={32} />
              </S.MenuLink>
            </Link>

            <Link href={redessociais.instagram} passHref>
              <S.MenuLink target="_blank" title="Instagram">
                <RiInstagramLine size={32} />
              </S.MenuLink>
            </Link>

            <Link href={redessociais.telegram} passHref>
              <S.MenuLink target="_blank" title="Telegram">
                <RiTelegramFill size={32} />
              </S.MenuLink>
            </Link>
          </S.SocialMedias>
        </S.FooterTopBlock>
      </S.FooterArea>

      <S.Copyright>
        <S.DataArea>
          <S.Name>{sindicatoName}</S.Name>
          <S.Cnpj>
            <b>CNPJ:</b> {sindicatoCNPJ}
          </S.Cnpj>
          <S.Location>{sindicatoAddress}</S.Location>
        </S.DataArea>
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
