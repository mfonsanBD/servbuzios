/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextSeo } from 'next-seo'

import { RiWhatsappLine, RiInstagramLine } from 'react-icons/ri'

import Base from 'templates/Base'
import TitleArea from 'components/TitleArea'

import * as S from './styles'

import { SITE_NAME } from 'pages/_app'

const ContatoTemplate = () => {
  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: Entre em Contato`}
        description="Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo"
        canonical={`https://woofbowlstand.com.br/contato`}
        openGraph={{
          url: `https://woofbowlstand.com.br/contato`,
          title: `${SITE_NAME} :: Entre em Contato`,
          description:
            'Entre em contato com a gente para criar o Comedouro Postural do seu Aumigo'
        }}
      />

      <TitleArea title="Contato" />

      <S.Wrapper>
        <S.ContactArea>
          <S.ContactBox
            href="https://api.whatsapp.com/send?phone=5521969572953"
            target="_blank"
          >
            <RiWhatsappLine size={25} />
            <p>(21) 96957-2953</p>
          </S.ContactBox>
          <S.ContactBox
            href="https://www.instagram.com/comedouroswoof/"
            target="_blank"
          >
            <RiInstagramLine size={25} />
            <p>@comedouroswoof</p>
          </S.ContactBox>
        </S.ContactArea>
      </S.Wrapper>
    </Base>
  )
}

export default ContatoTemplate
