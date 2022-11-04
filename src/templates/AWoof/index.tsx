import Image from 'next/image'

import Heading from 'components/Heading'
import TitleArea from 'components/TitleArea'

import Base from 'templates/Base'

import * as S from './styles'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'

export type AWoofTemplateProps = {
  aboutText: string
  aboutTitle: string
}

const AWoofTemplate = ({ aboutText, aboutTitle }: AWoofTemplateProps) => (
  <Base>
    <NextSeo
      title={`${SITE_NAME} :: ${aboutTitle}`}
      description={`${aboutText}`}
      canonical={`https://woofbowlstand.com.br/a-woof`}
      openGraph={{
        url: `https://woofbowlstand.com.br/a-woof`,
        title: `${SITE_NAME} :: ${aboutTitle}`,
        description: `${aboutText}`
      }}
    />

    <TitleArea title="A Woof" />

    <S.AboutSection id="about">
      <S.AboutLeft>
        <Heading size="huge">{aboutTitle}</Heading>
        <S.AboutText>{aboutText}</S.AboutText>
      </S.AboutLeft>

      <S.AboutRight>
        <Image
          src="/img/about-image.jpg"
          alt="Sobre Nós"
          layout="fill"
          objectFit="cover"
        />
      </S.AboutRight>
    </S.AboutSection>
  </Base>
)

export default AWoofTemplate
