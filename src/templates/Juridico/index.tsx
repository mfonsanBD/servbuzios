import { FooterProps } from 'components/Footer'
import Form from 'components/Form'
import Heading from 'components/Heading'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_NAME } from 'pages/_app'
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiWhatsappLine
} from 'react-icons/ri'
import Base from 'templates/Base'

import * as S from './styles'

export type JuridicoTemplateProps = {
  foto: string
  nome: string
  oab: string
  whatsapp: string
  facebook: string
  instagram: string
  biografia: string
} & FooterProps

const JuridicoTemplate = ({
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  biografia,
  facebook,
  foto,
  instagram,
  nome,
  oab,
  whatsapp,
  email,
  phone,
  redessociais
}: JuridicoTemplateProps) => (
  <Base
    sindicatoAddress={sindicatoAddress}
    sindicatoCNPJ={sindicatoCNPJ}
    sindicatoName={sindicatoName}
    email={email}
    phone={phone}
    redessociais={redessociais}
  >
    <NextSeo
      title={`${SITE_NAME} :: Jurídico`}
      description="Nós temos o compromisso de dar todo o aparo jurídico aos nossos associados."
      canonical={`https://servbuzios.org.br/juridico`}
      openGraph={{
        url: `https://servbuzios.org.br/juridico`,
        title: `${SITE_NAME} :: Jurídico`,
        description:
          'Nós temos o compromisso de dar todo o aparo jurídico aos nossos associados.'
      }}
    />

    <S.Wrapper>
      <Heading
        title="Jurídico"
        subtitle="Aqui você se informa sobre as ações coletivas do SERVBÚZIOS e faz consulta nos andamentos de seus processos, além de agendar atendimento, presencial ou virtual com nossos advogados"
        backgroundTitle="Jurídico"
      />

      <Form isContact={false} />
    </S.Wrapper>

    <S.AdvogadoSection>
      <S.PhotoArea>
        <Image src={foto} alt={nome} layout="fill" />
      </S.PhotoArea>
      <S.InfoArea>
        <S.OutherDatas>
          <S.Name>{nome}</S.Name>
          <S.Datas>
            <S.OAB>OAB/RJ: {oab}</S.OAB>
            <S.SocialMedias>
              <Link href={whatsapp} passHref>
                <S.MenuLink target="_blank" title="WhatsApp">
                  <RiWhatsappLine size={32} />
                </S.MenuLink>
              </Link>

              <Link href={facebook} passHref>
                <S.MenuLink target="_blank" title="Facebook">
                  <RiFacebookCircleFill size={32} />
                </S.MenuLink>
              </Link>

              <Link href={instagram} passHref>
                <S.MenuLink target="_blank" title="Instagram">
                  <RiInstagramLine size={32} />
                </S.MenuLink>
              </Link>
            </S.SocialMedias>
          </S.Datas>
        </S.OutherDatas>
        <S.Bio>{biografia}</S.Bio>
      </S.InfoArea>
    </S.AdvogadoSection>
  </Base>
)

export default JuridicoTemplate
