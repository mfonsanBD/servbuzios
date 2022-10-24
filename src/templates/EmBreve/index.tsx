import Image from 'next/image'

import Button from 'components/Button'
import SlideShow from 'components/SlideShow'

import * as S from './styles'

const EmBreveTemplate = () => (
  <S.Wrapper>
    <S.LeftArea>
      <S.LogoArea>
        <Image
          src="/img/logo-brown.svg"
          alt="Em Breve Woof Bowl Stand"
          width={90}
          height={90}
        />
      </S.LogoArea>
      <div>
        <S.Title>Em Breve!</S.Title>
        <S.Description>
          Estaremos lançando nosso site em breve. Enquanto isso acompanhe a
          gente em nosso Instagram.
        </S.Description>
        <Button
          as="a"
          href="https://www.instagram.com/comedouroswoof/"
          target="_blank"
        >
          @comedouroswoof
        </Button>
      </div>
      <S.Copy>&copy; Copyright 2022 - Todos os direitos reservados</S.Copy>
    </S.LeftArea>
    <S.RightArea>
      <SlideShow />
    </S.RightArea>
  </S.Wrapper>
)

export default EmBreveTemplate
