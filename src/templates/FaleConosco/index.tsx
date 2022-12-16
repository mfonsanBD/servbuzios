import { FooterProps } from 'components/Footer'
import Form from 'components/Form'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'

import Base from 'templates/Base'

import * as S from './styles'

import { TbMapPin, TbPhoneCall, TbMailOpened } from 'react-icons/tb'

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
      canonical={`https://servbuzios.org.br/juridico`}
      openGraph={{
        url: `https://servbuzios.org.br/juridico`,
        title: `${SITE_NAME} :: Fale Conosco`,
        description: 'Nossa página de contato. Fale conosco e associe-se agora!'
      }}
    />

    <S.Wrapper>
      <Heading title="Fale Conosco" backgroundTitle="Fale Conosco" />

      <Form isContact />
    </S.Wrapper>

    <S.MapBox>
      <S.InfoBox>
        <S.Box>
          <TbMapPin />
          <p>{sindicatoAddress}</p>
        </S.Box>

        <S.Box>
          <TbPhoneCall />
          <p>{phone}</p>
        </S.Box>

        <S.Box>
          <TbMailOpened />
          <p>{email}</p>
        </S.Box>
      </S.InfoBox>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1791350070453!2d-41.88996738440442!3d-22.75873243832791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9655c4aa7db89f%3A0x6f5997a18e05dd91!2sSERVB%C3%9AZIOS!5e0!3m2!1spt-BR!2sbr!4v1671225797060!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </S.MapBox>
  </Base>
)

export default FaleConoscoTemplate
