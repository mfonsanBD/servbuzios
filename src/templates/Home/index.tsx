import Image from 'next/image'

import Logo from 'components/Logo'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import SlideShow from 'components/SlideShow'
import FeatureCard from 'components/FeatureCard'
import ProductCard from 'components/ProductCard'

import * as S from './styles'
import { VscWand } from 'react-icons/vsc'
import { BiVector } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

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
  heroTitle: string
  heroSubtitle: string
  aboutText: string
  aboutTitle: string
  featuresTitle: string
  features: FeaturesData[]
  productsTitle: string
  products: ProductsData[]
  newsTitle: string
}

const HomeTemplate = ({
  heroTitle,
  heroSubtitle,
  aboutText,
  aboutTitle,
  featuresTitle,
  features,
  productsTitle,
  products,
  newsTitle
}: HomeProps) => {
  return (
    <S.Wrapper>
      <S.HeroSection id="hero">
        <S.LogoAreaHome>
          <Logo />
        </S.LogoAreaHome>

        <S.HeroAreas>
          <S.HeroLeftArea>
            <S.HeroTitle>
              {heroTitle}
              <span>.</span>
            </S.HeroTitle>
            <S.HeroSubtitle>{heroSubtitle}</S.HeroSubtitle>
          </S.HeroLeftArea>

          <S.HeroRightArea>
            <SlideShow />
          </S.HeroRightArea>
        </S.HeroAreas>

        <S.ToDown>
          <Image width={467} height={67} src="/img/to-down-area.svg" />
          <a href="#about">
            <S.ToDownIconArea>
              <HiOutlineArrowNarrowDown />
            </S.ToDownIconArea>
          </a>
        </S.ToDown>
      </S.HeroSection>

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

      <S.FeaturesSection id="features">
        <S.FeaturesTitleArea>
          <Heading lineLeft size="huge">
            {featuresTitle}
          </Heading>
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
        <Heading lineLeft size="huge">
          {productsTitle}
        </Heading>

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
        <Heading lineLeft size="huge">
          {newsTitle}
        </Heading>
      </S.NewsSection>

      <Footer />
    </S.Wrapper>
  )
}

export default HomeTemplate
