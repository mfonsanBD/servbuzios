import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import BannerSlider from 'components/BannerSlider'
import { BannerProps } from 'components/Banner'

import * as S from './styles'
import Heading from 'components/Heading'
import AgendaCardSlider from 'components/AgendaCardSlider'
import { AgendaCardProps } from 'components/AgendaCard'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import ConvenioCard, { ConvenioCardProps } from 'components/ConvenioCard'
import { FooterProps } from 'components/Footer'
import Button from 'components/Button'

export type HomeTemplateProps = {
  banner: BannerProps[]
  presidenteImage: string
  presidenteText: string
  presidenteName: string
  agenda: AgendaCardProps[]
  news: NewsCardProps[]
  sindicatoImage: string
  sindicatoText: string
  convenios: ConvenioCardProps[]
} & FooterProps

const HomeTemplate = ({
  banner,
  presidenteName,
  presidenteImage,
  presidenteText,
  agenda,
  news,
  sindicatoImage,
  sindicatoText,
  convenios,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: HomeTemplateProps) => {
  return (
    <Base
      sindicatoAddress={sindicatoAddress}
      sindicatoCNPJ={sindicatoCNPJ}
      sindicatoName={sindicatoName}
      email={email}
      phone={phone}
      redessociais={redessociais}
    >
      <NextSeo
        title={`${SITE_NAME} :: Sindicato dos Servidores Públicos Municipais de Armação dos Búzios`}
        description="O sindicato tem como objetivo negociar e buscar a organização coletiva, intervir legalmente em ações judiciais e participar da elaboração da legislação laboral, tratando dos problemas coletivos que surgem decorrentes do exercício da profissão."
        canonical={`https://servbuzios.org.br`}
        openGraph={{
          url: `https://servbuzios.org.br`,
          title: `${SITE_NAME} :: Sindicato dos Servidores Públicos Municipais de Armação dos Búzios`,
          description:
            'O sindicato tem como objetivo negociar e buscar a organização coletiva, intervir legalmente em ações judiciais e participar da elaboração da legislação laboral, tratando dos problemas coletivos que surgem decorrentes do exercício da profissão.'
        }}
      />

      <BannerSlider items={banner} />

      <S.PresidenteSection>
        <S.PhotoArea>
          <Image src={presidenteImage} alt={presidenteName} layout="fill" />
        </S.PhotoArea>
        <S.InfoArea>
          <S.PresidenteTitle>Fala, Presidente!</S.PresidenteTitle>
          <S.PresidenteText>{presidenteText}</S.PresidenteText>
          <S.PresidenteName>
            {presidenteName} - Presidente ServBúzios
          </S.PresidenteName>
        </S.InfoArea>
      </S.PresidenteSection>

      <S.AgendaSection>
        <Heading title="Agenda" backgroundTitle="Agenda" />
        <AgendaCardSlider items={agenda} />
      </S.AgendaSection>

      <S.NeESection>
        <Heading
          title="Notícias & Editais"
          backgroundTitle="Notícias & Editais"
        />

        <S.NewsAreaHome>
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </S.NewsAreaHome>

        <S.SeeMoreArea>
          <Button as="a" href="/noticias-e-editais">
            Ver Mais
          </Button>
        </S.SeeMoreArea>
      </S.NeESection>

      <S.SindicatoSection>
        <S.SindicatoCover>
          <Image
            src={sindicatoImage}
            alt="Reunião do Sindicato"
            layout="fill"
          />
        </S.SindicatoCover>

        <S.SindicatoContent>
          <S.Text>{sindicatoText}</S.Text>
          <div style={{ textAlign: 'center', marginTop: '3.2rem' }}>
            <Button as="a" href="/fale-conosco">
              Filie-se Agora!
            </Button>
          </div>
        </S.SindicatoContent>
      </S.SindicatoSection>

      <S.ConvenioSection>
        <Heading
          title="Convênios"
          backgroundTitle="Convênios"
          subtitle="Clique no logotipo da empresa para ver suas promoções"
        />

        <S.ConvenioArea>
          {convenios.map((item, index) => (
            <ConvenioCard key={index} {...item} />
          ))}
        </S.ConvenioArea>
      </S.ConvenioSection>
    </Base>
  )
}

export default HomeTemplate
