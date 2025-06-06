import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Button from 'components/Button'
import Heading from 'components/Heading'
import PostsEmpty from 'components/PostsEmpty'
import { BannerProps } from 'components/Banner'
import { FooterProps } from 'components/Footer'
import BannerSlider from 'components/BannerSlider'
// import AgendaCard, { AgendaCardProps } from 'components/AgendaCard'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import ConvenioCard, { ConvenioCardProps } from 'components/ConvenioCard'

import * as S from './styles'
import VideoArea from 'components/VideoArea'

export type HomeTemplateProps = {
  banner: BannerProps[]
  presidenteImage: string
  presidenteText: string
  presidenteName: string
  // agenda: AgendaCardProps[]
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
  // agenda,
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
          <S.PresidenteText
            dangerouslySetInnerHTML={{ __html: presidenteText }}
          />
          <S.PresidenteName>
            {presidenteName} - Presidente ServBúzios
          </S.PresidenteName>
        </S.InfoArea>
      </S.PresidenteSection>

      <S.AgendaSection>
        <Heading
          title="A Voz do Servidor"
          backgroundTitle="A Voz do Servidor"
        />

        <VideoArea url="https://www.youtube.com/embed/bm7LWkPHF7A?si=Sl3pgLz5MetfZmcp" />
      </S.AgendaSection>

      <S.NeESection>
        <Heading title="Notícias" backgroundTitle="Notícias" />

        {news.length > 0 ? (
          <>
            <S.NewsAreaHome>
              {news.map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
            </S.NewsAreaHome>

            <S.SeeMoreArea>
              <Button as="a" href="/noticias">
                Ver Mais
              </Button>
            </S.SeeMoreArea>
          </>
        ) : (
          <PostsEmpty texto="Nenhuma notícia encontrada no momento!" />
        )}
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
          <S.Text dangerouslySetInnerHTML={{ __html: sindicatoText }} />
        </S.SindicatoContent>
      </S.SindicatoSection>

      <S.ConvenioSection>
        <Heading title="Convênios" backgroundTitle="Convênios" />

        {convenios.length > 0 ? (
          <S.ConvenioArea>
            {convenios.map((item, index) => (
              <ConvenioCard key={index} {...item} />
            ))}
          </S.ConvenioArea>
        ) : (
          <PostsEmpty texto="Nenhum convênio encontrado no momento!" />
        )}
      </S.ConvenioSection>

      <S.CTASection>
        <S.CTAContent>
          <S.CTATitle>Torne-se um Associado!</S.CTATitle>
          <S.CTADescription>
            Faça parte da nossa luta pelos direitos dos servidores públicos
            municipais. Junte-se a nós e tenha acesso a benefícios exclusivos,
            representação sindical e participe das decisões que impactam sua
            carreira.
          </S.CTADescription>
          <S.CTAButtonArea>
            <Button
              color="white"
              as="a"
              href="https://gestao.servbuzios.org.br/cadastro"
              target="_blank"
            >
              Cadastre-se Agora!
            </Button>
          </S.CTAButtonArea>
        </S.CTAContent>
      </S.CTASection>
    </Base>
  )
}

export default HomeTemplate
