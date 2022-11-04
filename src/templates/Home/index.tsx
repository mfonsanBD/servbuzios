import Image from 'next/image'

import Heading from 'components/Heading'
import FeatureCard from 'components/FeatureCard'
import ProductCard from 'components/ProductCard'

import * as S from './styles'
import { BiVector } from 'react-icons/bi'
import { VscWand } from 'react-icons/vsc'
import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { MdOutlineDesignServices } from 'react-icons/md'

import Base from 'templates/Base'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'

export type FeaturesData = {
  title: string
  description: string
}

export type ProductsData = {
  title: string
  slug: string
  description: string
}

export type HomeProps = {
  hero: BannerProps[]
  aboutText: string
  aboutTitle: string
  featuresTitle: string
  features: FeaturesData[]
  productsTitle: string
  products: ProductsData[]
  meowTitle: string
  meowSubtitle: string
  newsTitle: string
}

const HomeTemplate = ({
  hero,
  aboutText,
  aboutTitle,
  featuresTitle,
  features,
  productsTitle,
  products,
  meowTitle,
  newsTitle
}: HomeProps) => {
  return (
    <Base>
      <NextSeo
        title={`${SITE_NAME} :: O Comedouro Postural do seu Pet`}
        description="O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes."
        canonical={`https://woofbowlstand.com.br`}
        openGraph={{
          url: `https://woofbowlstand.com.br`,
          title: `${SITE_NAME} :: O Comedouro Postural do seu Pet`,
          description:
            'O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes.'
        }}
      />

      <S.HeroSection id="hero">
        <BannerSlider items={hero} />
      </S.HeroSection>

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

      <S.FeaturesSection id="features">
        <S.FeaturesTitleArea>
          <Heading size="huge">{featuresTitle}</Heading>
        </S.FeaturesTitleArea>

        <S.FeaturesArea>
          {features.map((feature) => (
            <FeatureCard
              icon={
                feature.title === 'Design Moderno' ? (
                  <MdOutlineDesignServices size={52} />
                ) : feature.title === 'Facilidade' ? (
                  <VscWand size={52} />
                ) : (
                  <BiVector size={52} />
                )
              }
              title={feature.title}
              description={feature.description}
              key={feature.title}
            />
          ))}
        </S.FeaturesArea>
      </S.FeaturesSection>

      <S.ProductsSection id="products">
        <Heading size="huge">{productsTitle}</Heading>

        <S.ProductsArea>
          {products.map((product) => (
            <ProductCard
              image={`/img/${product.slug}.png`}
              slug={product.slug}
              title={product.title}
              description={product.description}
              key={product.slug}
            />
          ))}
        </S.ProductsArea>
      </S.ProductsSection>

      <S.NewsSection id="news">
        <Heading size="huge">{newsTitle}</Heading>
      </S.NewsSection>

      <S.MeowSection>
        <Heading color="white" align="center" size="huge">
          {meowTitle}
        </Heading>
      </S.MeowSection>
    </Base>
  )
}

export default HomeTemplate
