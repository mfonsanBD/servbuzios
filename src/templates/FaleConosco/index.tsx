import { NextSeo } from 'next-seo'
import { ToastContainer } from 'react-toastify'
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser
} from 'react-icons/fi'

import Button from 'components/Button'
import { FooterProps } from 'components/Footer'
import Form from 'components/Form'
import PageHeader from 'components/PageHeader'
import { SITE_NAME } from 'pages/_app'
import Base from 'templates/Base'
import { Container } from 'styles/shared'
import { FormatEmailLink, FormatWhatsAppLink } from 'utils/formatLinks'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const WHATSAPP_NUMBER = '(22) 99201-0835'
const MAPS_URL =
  'https://www.google.com/maps?q=SERVB%C3%9AZIOS+Estrada+da+Usina+350+Arma%C3%A7%C3%A3o+dos+B%C3%BAzios'

const FaleConoscoTemplate = ({
  email,
  phone,
  redessociais,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName
}: FooterProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Fale Conosco`}
      description="Nossa página de contato. Fale conosco e associe-se agora!"
      canonical={`https://servbuzios.org.br/fale-conosco`}
      openGraph={{
        url: `https://servbuzios.org.br/fale-conosco`,
        title: `${SITE_NAME} :: Fale Conosco`,
        description: 'Nossa página de contato. Fale conosco e associe-se agora!'
      }}
    />

    <PageHeader
      badge="Atendimento"
      badgeIcon={<FiMail />}
      title="Fale conosco"
      description="Tire dúvidas, envie sugestões ou associe-se. Em breve responderemos sua mensagem."
    />

    <S.Section>
      <S.Grid>
        <Form isContact title="Envie uma mensagem" />

        <S.Dark>
          <S.DarkTitle>Canais de atendimento</S.DarkTitle>

          <S.Channel>
            <S.IconCircle aria-hidden="true">
              <FiMapPin />
            </S.IconCircle>
            <S.ChannelBody>
              <span>Endereço</span>
              <S.Value>{sindicatoAddress}</S.Value>
            </S.ChannelBody>
          </S.Channel>

          <S.Channel>
            <S.IconCircle aria-hidden="true">
              <FiPhone />
            </S.IconCircle>
            <S.ChannelBody>
              <span>Telefones</span>
              <S.ChannelLink href={`tel:${phone}`}>
                {phone} · Fixo
              </S.ChannelLink>
              <S.ChannelLink
                href={FormatWhatsAppLink(WHATSAPP_NUMBER)}
                target="_blank"
                rel="noreferrer"
              >
                {WHATSAPP_NUMBER} · WhatsApp
              </S.ChannelLink>
            </S.ChannelBody>
          </S.Channel>

          <S.Channel>
            <S.IconCircle aria-hidden="true">
              <FiMail />
            </S.IconCircle>
            <S.ChannelBody>
              <span>E-mail</span>
              <S.ChannelLink href={FormatEmailLink(email)}>
                {email}
              </S.ChannelLink>
            </S.ChannelBody>
          </S.Channel>

          <S.Channel>
            <S.IconCircle aria-hidden="true">
              <FiUser />
            </S.IconCircle>
            <S.ChannelBody>
              <span>Redes sociais</span>
              <S.Socials>
                <S.Pill
                  href={redessociais.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </S.Pill>
                <S.Pill
                  href={redessociais.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </S.Pill>
                <S.Pill
                  href={redessociais.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </S.Pill>
                <S.Pill
                  href={redessociais.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </S.Pill>
              </S.Socials>
            </S.ChannelBody>
          </S.Channel>
        </S.Dark>
      </S.Grid>
    </S.Section>

    <S.MapSection>
      <Container>
        <S.MapFrame>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1791350070453!2d-41.88996738440442!3d-22.75873243832791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9655c4aa7db89f%3A0x6f5997a18e05dd91!2sSERVB%C3%9AZIOS!5e0!3m2!1spt-BR!2sbr!4v1671225797060!5m2!1spt-BR!2sbr"
            title="Mapa com a localização do ServBúzios"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </S.MapFrame>
        <S.MapAction>
          <Button
            as="a"
            color="white"
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps
            <FiArrowUpRight aria-hidden="true" />
          </Button>
        </S.MapAction>
      </Container>
    </S.MapSection>

    <ToastContainer />
  </Base>
)

export default FaleConoscoTemplate
