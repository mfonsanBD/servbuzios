/* eslint-disable @next/next/no-img-element */
import ProductCard from 'components/ProductCard'

import * as S from './styles'
import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'

import Base from 'templates/Base'
import { NextSeo } from 'next-seo'
import { SITE_NAME } from 'pages/_app'
import Image from 'next/image'

export type ProductsData = {
  title: string
  slug: string
  description: string
}

export type HomeProps = {
  hero: BannerProps[]
  productsTitle: string
  products: ProductsData[]
}

const HomeTemplate = ({ hero, products }: HomeProps) => {
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
            'O Comedouro Postural WOOF Bowl Stand é projetado para cães e gatos, valoriza o design moderno atenuado com base em formas clássicas que se encaixam perfeitamente até em ambientes muito exigentes.',
          images: [
            {
              url: `${process.env.NEXTAUTH_URL}/img/Thumbnail.png`,
              alt: `${SITE_NAME} :: O Comedouro Postural do seu Pet`
            }
          ]
        }}
      />

      <S.HeroSection id="hero">
        <BannerSlider items={hero} />
      </S.HeroSection>

      <S.AvaliacaoSection>
        <S.AvaliacaoText>
          <h1>Como Avaliar a Altura Ideal</h1>
          <p>
            A WOOF Bowl Stand sugere medir do{' '}
            <span>“Ossinho Protuberante no Peito”</span> até o chão.
          </p>
        </S.AvaliacaoText>

        <S.ImagemArea>
          <Image
            layout="fill"
            objectFit="cover"
            src="/img/como-avaliar-altura-ideal.png"
            alt="Cachorro com detalhes de como tirar medida para escolher o melhor comendouro"
          />
        </S.ImagemArea>
      </S.AvaliacaoSection>

      <S.ProductsSection id="products">
        <S.ProductsArea>
          {products.map((product) => (
            <ProductCard
              image={`/img/${product.slug}.jpg`}
              slug={product.slug}
              title={product.title}
              description={product.description}
              key={product.slug}
            />
          ))}
        </S.ProductsArea>
      </S.ProductsSection>
    </Base>
  )
}

export default HomeTemplate
