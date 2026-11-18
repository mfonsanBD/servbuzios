/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiChevronRight,
  FiFileText,
  FiPlay,
  FiTag,
  FiUser
} from 'react-icons/fi'
import { TbScale, TbSpeakerphone } from 'react-icons/tb'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Badge from 'components/Badge'
import Button from 'components/Button'
import Heading from 'components/Heading'
import PostsEmpty from 'components/PostsEmpty'
import VideoArea from 'components/VideoArea'
import { FooterProps } from 'components/Footer'
import { SIGNUP_URL } from 'components/Menu'
import NewsCard, { NewsCardProps } from 'components/NewsCard'
import NewsCarousel from 'components/NewsCarousel'
import { ConvenioCardProps } from 'components/ConvenioCard'

import { TextLink } from 'styles/shared'

import * as S from './styles'

export type HomeTemplateProps = {
  presidenteImage: string
  presidenteText: string
  presidenteName: string
  /** notícias vinculadas à home no CMS: carrossel do topo */
  news: NewsCardProps[]
  /** mais recentes que não estão no topo: grade da seção "Notícias" */
  latestNews: NewsCardProps[]
  totalConvenios: number
  sindicatoImage: string
  sindicatoText: string
  convenios: ConvenioCardProps[]
} & FooterProps

const SERVICES = [
  {
    href: '/juridico',
    title: 'Jurídico',
    text: 'Acompanhe as ações coletivas, consulte o andamento dos seus processos e agende atendimento presencial ou virtual com nossos advogados.'
  },
  {
    href: '/convenio',
    title: 'Convênios e parcerias',
    text: 'Empresas e profissionais de saúde, educação, alimentação e lazer com condições para associados.'
  },
  {
    href: '/documentos-e-editais',
    title: 'Documentos e editais',
    text: 'Estatuto, atas, editais de convocação, Jornal Buziando e as leis que regem a carreira do servidor.'
  },
  {
    href: '/noticias',
    title: 'Notícias',
    text: 'As lutas, as conquistas e os comunicados do sindicato, atualizados pela diretoria.'
  }
]

const HomeTemplate = ({
  presidenteName,
  presidenteImage,
  presidenteText,
  news,
  latestNews,
  totalConvenios,
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
  const partners = convenios.slice(0, 6)

  const reasons = [
    {
      icon: <TbScale />,
      title: 'Representação sindical',
      text: 'O sindicato negocia, organiza a categoria e atua em questões judiciais e administrativas na defesa dos seus direitos.'
    },
    {
      icon: <FiTag />,
      title: 'Benefícios exclusivos',
      text: `Condições especiais em saúde, educação, alimentação e lazer com as ${
        totalConvenios > 0 ? `${totalConvenios} ` : ''
      }empresas e profissionais conveniados.`
    },
    {
      icon: <TbSpeakerphone />,
      title: 'Voz nas decisões',
      text: 'Participe das assembleias e das decisões que impactam a sua carreira no serviço público municipal.'
    }
  ]

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

      <S.Hero>
        <S.HeroGrid>
          <S.HeroText>
            <S.LogoTile>
              <img src="/img/logo-cor.svg" alt="" width={58} height={58} />
            </S.LogoTile>

            <S.HeroTitle>
              União e valorização do servidor público de Búzios
            </S.HeroTitle>

            <S.HeroLead>
              O ServBúzios representa os servidores públicos municipais de
              Armação dos Búzios na negociação coletiva, na defesa jurídica e na
              conquista de direitos para a categoria.
            </S.HeroLead>

            <S.HeroActions>
              <Button
                as="a"
                href={SIGNUP_URL}
                target="_blank"
                rel="noreferrer"
                size="large"
              >
                Quero ser associado
                <FiChevronRight aria-hidden="true" />
              </Button>
              <Link href="/juridico" passHref>
                <Button as="a" color="white" size="large">
                  Falar com o jurídico
                  <FiArrowUpRight aria-hidden="true" />
                </Button>
              </Link>
            </S.HeroActions>

            <S.Checklist>
              <li>
                <FiCheck aria-hidden="true" />
                Assessoria jurídica e ações coletivas
              </li>
              <li>
                <FiCheck aria-hidden="true" />
                {totalConvenios > 0
                  ? `${totalConvenios} convênios`
                  : 'Convênios'}{' '}
                e parcerias para associados
              </li>
              <li>
                <FiCheck aria-hidden="true" />
                Editais, atas e leis do servidor em um só lugar
              </li>
            </S.Checklist>
          </S.HeroText>

          <S.HeroAside>
            <S.Watermark src="/img/logo-cor.svg" alt="" aria-hidden="true" />

            <NewsCarousel items={news} />
          </S.HeroAside>
        </S.HeroGrid>
      </S.Hero>

      {partners.length > 0 && (
        <S.Partners>
          <S.PartnersInner>
            <h2>Convênios e parcerias para associados</h2>
            <S.PartnersBar>
              {partners.map((item) => (
                <span key={item.empresa}>{item.empresa}</span>
              ))}
              <Link href="/convenio" passHref>
                <TextLink>
                  Ver os {totalConvenios} convênios
                  <FiArrowRight aria-hidden="true" />
                </TextLink>
              </Link>
            </S.PartnersBar>
          </S.PartnersInner>
        </S.Partners>
      )}

      <S.Services>
        <S.Stack>
          <Heading
            title="O que o sindicato faz por você"
            badge="Serviços"
            badgeIcon={<FiCheck />}
          />

          <S.ServicesCard>
            <S.ServiceList>
              {SERVICES.map((service, index) => (
                <Link key={service.href} href={service.href} passHref>
                  <S.ServiceItem>
                    <S.ServiceNumber aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}.
                    </S.ServiceNumber>
                    <S.ServiceText>
                      <strong>{service.title}</strong>
                      <span>{service.text}</span>
                    </S.ServiceText>
                    <FiArrowRight aria-hidden="true" />
                  </S.ServiceItem>
                </Link>
              ))}
            </S.ServiceList>

            <S.Emblem>
              <S.EmblemRing>
                <S.EmblemSeal>
                  <img
                    src="/img/logo-cor.svg"
                    alt="Brasão do ServBúzios"
                    width={168}
                    height={168}
                  />
                </S.EmblemSeal>
              </S.EmblemRing>
              <S.EmblemIcon
                aria-hidden="true"
                style={{ left: '12%', top: '14%' }}
              >
                <TbScale />
              </S.EmblemIcon>
              <S.EmblemIcon
                aria-hidden="true"
                style={{ right: '12%', top: '18%' }}
              >
                <FiTag />
              </S.EmblemIcon>
              <S.EmblemIcon
                aria-hidden="true"
                style={{ left: '10%', bottom: '16%' }}
              >
                <FiFileText />
              </S.EmblemIcon>
              <S.EmblemIcon
                aria-hidden="true"
                style={{ right: '11%', bottom: '14%' }}
              >
                <TbSpeakerphone />
              </S.EmblemIcon>
            </S.Emblem>
          </S.ServicesCard>
        </S.Stack>
      </S.Services>

      <S.Why>
        <S.WhyInner>
          <S.WhyTop>
            <h2>Por que se associar?</h2>
            <p>
              Sindicalizar-se significa unir-se, organizar-se e fortalecer-se
              com a sua categoria, em defesa dos seus interesses e da
              coletividade.
            </p>
          </S.WhyTop>

          <S.Reasons>
            {reasons.map((reason) => (
              <S.Reason key={reason.title}>
                <S.ReasonArt aria-hidden="true">
                  <span>{reason.icon}</span>
                </S.ReasonArt>
                <S.ReasonBody>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </S.ReasonBody>
              </S.Reason>
            ))}
          </S.Reasons>
        </S.WhyInner>
      </S.Why>

      <S.News>
        <S.Stack>
          <Heading
            title="Acompanhe as lutas e conquistas da categoria"
            badge="Notícias"
            badgeIcon={<TbSpeakerphone />}
          />

          {latestNews.length > 0 && (
            <S.NewsGrid>
              {latestNews.map((item) => (
                <NewsCard key={item.slug} {...item} />
              ))}
            </S.NewsGrid>
          )}

          {news.length === 0 && latestNews.length === 0 && (
            <PostsEmpty texto="Nenhuma notícia encontrada aqui no momento!" />
          )}

          {(news.length > 0 || latestNews.length > 0) && (
            <Link href="/noticias" passHref>
              <Button as="a" color="white">
                Ver todas as notícias
                <FiArrowRight aria-hidden="true" />
              </Button>
            </Link>
          )}
        </S.Stack>
      </S.News>

      <S.President>
        <S.PresidentBlock>
          <S.PresidentIntro>
            <Badge icon={<FiUser />} inverted>
              Palavra da presidência
            </Badge>
            <h2>Fala, presidente</h2>
            <S.Quote>“Sem luta não há vitória.”</S.Quote>

            <S.Person>
              <S.PersonPhoto>
                <Image
                  src={presidenteImage}
                  alt={presidenteName}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 30%"
                  sizes="120px"
                />
              </S.PersonPhoto>
              <div>
                <strong>{presidenteName}</strong>
                <span>Presidente do ServBúzios</span>
              </div>
            </S.Person>
          </S.PresidentIntro>

          <S.PresidentText
            dangerouslySetInnerHTML={{ __html: presidenteText }}
          />
        </S.PresidentBlock>
      </S.President>

      <S.Video>
        <S.Stack>
          <Heading
            title="A voz do servidor"
            badge="Vídeo"
            badgeIcon={<FiPlay />}
          />

          <VideoArea url="https://www.youtube.com/embed/bm7LWkPHF7A?si=Sl3pgLz5MetfZmcp" />
        </S.Stack>
      </S.Video>

      <S.About>
        <S.AboutGrid>
          <S.AboutPhoto>
            <Image
              src={sindicatoImage}
              alt="Servidores reunidos em assembleia do sindicato"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </S.AboutPhoto>

          <S.AboutText>
            <Badge icon={<TbScale />}>O sindicato</Badge>
            <h2>A defesa dos direitos da categoria</h2>
            <S.RichText dangerouslySetInnerHTML={{ __html: sindicatoText }} />
            <Link href="/diretoria-e-conselho" passHref>
              <Button as="a" color="white">
                Conheça a diretoria e o conselho
                <FiArrowRight aria-hidden="true" />
              </Button>
            </Link>
          </S.AboutText>
        </S.AboutGrid>
      </S.About>
    </Base>
  )
}

export default HomeTemplate
