import Image from 'next/image'

import Heading from 'components/Heading'
import TitleArea from 'components/TitleArea'

import Base from 'templates/Base'

import * as S from './styles'

export type AWoofTemplateProps = {
  aboutText: string
  aboutTitle: string
}

const AWoofTemplate = ({ aboutText, aboutTitle }: AWoofTemplateProps) => (
  <Base>
    <TitleArea title="A Woof" />

    <S.AboutSection id="about">
      <S.AboutLeft>
        <Heading lineLeft size="huge">
          {aboutTitle}
        </Heading>
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
