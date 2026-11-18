/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronRight } from 'react-icons/fi'

import Button from 'components/Button'
import { MENU_LINKS, MEMBER_AREA_URL, SIGNUP_URL } from 'components/Menu'
import { FormatWhatsAppLink } from 'utils/formatLinks'

import * as S from './styles'

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

const WHATSAPP_NUMBER = '(22) 99201-0835'

const Footer = ({
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: FooterProps) => (
  <S.Wrapper>
    <S.Dark>
      <S.Inner>
        <S.Cta aria-labelledby="footer-cta-title">
          <S.CtaText>
            <h2 id="footer-cta-title">Torne-se um associado</h2>
            <p>
              Faça parte da nossa luta pelos direitos dos servidores públicos
              municipais. Junte-se a nós e tenha acesso a benefícios exclusivos,
              representação sindical e participe das decisões que impactam sua
              carreira.
            </p>
          </S.CtaText>
          <Button
            as="a"
            href={SIGNUP_URL}
            target="_blank"
            rel="noreferrer"
            size="large"
          >
            Cadastre-se agora
            <FiChevronRight aria-hidden="true" />
          </Button>
        </S.Cta>

        <S.Columns>
          <S.Column>
            <h3>Navegação</h3>
            {MENU_LINKS.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <S.FooterLink>{link.fullLabel}</S.FooterLink>
              </Link>
            ))}
          </S.Column>

          <S.Column>
            <h3>Associado</h3>
            <S.FooterLink
              href={MEMBER_AREA_URL}
              target="_blank"
              rel="noreferrer"
            >
              Área do associado
            </S.FooterLink>
            <S.FooterLink href={SIGNUP_URL} target="_blank" rel="noreferrer">
              Quero ser associado
            </S.FooterLink>
          </S.Column>

          <S.Column>
            <h3>Contato</h3>
            <S.FooterLink href={`tel:${phone}`}>{phone} · Fixo</S.FooterLink>
            <S.FooterLink
              href={FormatWhatsAppLink(WHATSAPP_NUMBER)}
              target="_blank"
              rel="noreferrer"
            >
              {WHATSAPP_NUMBER} · WhatsApp
            </S.FooterLink>
            <S.FooterLink href={`mailto:${email}`}>{email}</S.FooterLink>
            <address>{sindicatoAddress}</address>
          </S.Column>

          <S.Column>
            <h3>Redes sociais</h3>
            <S.FooterLink
              href={redessociais.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </S.FooterLink>
            <S.FooterLink
              href={redessociais.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </S.FooterLink>
            <S.FooterLink
              href={redessociais.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </S.FooterLink>
            <S.FooterLink
              href={redessociais.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </S.FooterLink>
          </S.Column>
        </S.Columns>

        <S.Bottom>
          <S.Identity>
            <img src="/img/logo-branco.svg" alt="" width={56} height={56} />
            <div>
              <strong>{sindicatoName}</strong>
              <span>CNPJ {sindicatoCNPJ}</span>
            </div>
          </S.Identity>

          <S.Affiliations>
            <span>Filiado a</span>
            <S.AffiliationLogo
              href="https://www.cspb.org.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/img/cspb.png" alt="CSPB" width={44} height={44} />
            </S.AffiliationLogo>
            <S.AffiliationLogo
              href="https://ctb.org.br/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/img/ctb.png" alt="CTB" width={52} height={40} />
            </S.AffiliationLogo>
            <S.AffiliationLogo
              href="https://www.feseprj.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/img/fesep.png"
                alt="FESEP-RJ"
                width={44}
                height={44}
              />
            </S.AffiliationLogo>
          </S.Affiliations>

          <S.CreatedBy>
            Desenvolvido por{' '}
            <a
              href="https://buzios.digital"
              target="_blank"
              rel="noreferrer noopener"
            >
              Búzios Digital
            </a>
          </S.CreatedBy>
        </S.Bottom>
      </S.Inner>
    </S.Dark>
  </S.Wrapper>
)

export default Footer
