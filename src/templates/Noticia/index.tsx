import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { FiChevronLeft, FiLink } from 'react-icons/fi'

import Base from 'templates/Base'
import { SITE_NAME } from 'pages/_app'

import Button from 'components/Button'
import { FooterProps } from 'components/Footer'
import NewsCard, { NewsCardProps } from 'components/NewsCard'

import { Container, SectionTitle } from 'styles/shared'
import { IsoDay, LongDate } from 'utils/formatDate'

import * as S from './styles'

export type NoticiaTemplateProps = {
  imagem: string
  titulo: string
  descricao: string
  slug: string
  texto: string
  createdAt: string
  related: NewsCardProps[]
} & FooterProps

const NoticiaTemplate = ({
  createdAt,
  descricao,
  imagem,
  slug,
  texto,
  titulo,
  related,
  sindicatoAddress,
  sindicatoCNPJ,
  sindicatoName,
  email,
  phone,
  redessociais
}: NoticiaTemplateProps) => {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const url = `https://servbuzios.org.br/noticia/${slug}`

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      // sem permissão ou sem suporte ao clipboard: o link continua nos outros botões
      setCopied(false)
    }
  }

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
        title={`${SITE_NAME} :: ${titulo}`}
        description={descricao}
        canonical={`https://servbuzios.org.br/noticia/${slug}`}
        openGraph={{
          url: `https://servbuzios.org.br/noticia/${slug}`,
          title: `${SITE_NAME} :: ${titulo}`,
          description: descricao,
          images: [
            {
              url: imagem,
              alt: descricao
            }
          ]
        }}
      />

      <article>
        <S.Top>
          <S.TopInner>
            <Link href="/noticias" passHref>
              <Button as="a" color="white" size="small">
                <FiChevronLeft aria-hidden="true" />
                Todas as notícias
              </Button>
            </Link>

            <S.PostedOn dateTime={IsoDay(createdAt)}>
              {`Publicado em ${LongDate(createdAt)}`}
            </S.PostedOn>

            <S.Title>{titulo}</S.Title>

            {!!descricao && <S.Lead>{descricao}</S.Lead>}
          </S.TopInner>
        </S.Top>

        <S.CoverSection>
          <S.Narrow>
            {/* a arte tem proporção variável: img nativa evita o corte */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <S.Cover src={imagem} alt={titulo} />
          </S.Narrow>
        </S.CoverSection>

        <S.Body>
          <S.Narrow>
            <S.Text dangerouslySetInnerHTML={{ __html: texto }} />

            <S.Share>
              <S.ShareLabel>Compartilhar</S.ShareLabel>

              <Button
                as="a"
                color="white"
                size="small"
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${titulo} ${url}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </Button>

              <Button
                as="a"
                color="white"
                size="small"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </Button>

              <Button
                type="button"
                color="white"
                size="small"
                onClick={handleCopy}
              >
                <FiLink aria-hidden="true" />
                {copied ? 'Link copiado' : 'Copiar link'}
              </Button>

              <S.VisuallyHidden role="status" aria-live="polite">
                {copied ? 'Link copiado para a área de transferência' : ''}
              </S.VisuallyHidden>
            </S.Share>
          </S.Narrow>
        </S.Body>
      </article>

      {related.length > 0 && (
        <S.Related>
          <Container>
            <SectionTitle>Outras notícias</SectionTitle>
            <S.RelatedGrid>
              {related.map((post) => (
                <NewsCard
                  key={post.slug}
                  imagem={post.imagem}
                  titulo={post.titulo}
                  slug={post.slug}
                  createdAt={post.createdAt}
                  descricao={post.descricao}
                />
              ))}
            </S.RelatedGrid>
          </Container>
        </S.Related>
      )}
    </Base>
  )
}

export default NoticiaTemplate
