import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi'

import { NewsCardProps } from 'components/NewsCard'
import { TextLink } from 'styles/shared'
import { IsoDay, LongDate } from 'utils/formatDate'

import * as S from './styles'

export type NewsCarouselProps = {
  items: NewsCardProps[]
  /** tempo de cada notícia na troca automática, em milissegundos */
  interval?: number
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// distância entre dois pontos de encaixe (largura da notícia + espaço entre elas)
const getStep = (viewport: HTMLElement, total: number) =>
  total > 1
    ? (viewport.scrollWidth - viewport.clientWidth) / (total - 1)
    : viewport.clientWidth

/**
 * Carrossel das notícias do topo da home.
 * A rolagem é nativa (scroll-snap), então arrastar no celular funciona sem
 * biblioteca. A troca automática pausa com o mouse em cima ou com foco dentro,
 * e para de vez quando a pessoa navega por conta própria.
 */
const NewsCarousel = ({ items, interval = 6000 }: NewsCarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHeld, setIsHeld] = useState(false)

  const total = items.length
  const hasControls = total > 1

  const goTo = useCallback(
    (index: number) => {
      const viewport = viewportRef.current
      if (!viewport || total === 0) return

      const target = (index + total) % total

      viewport.scrollTo({
        left: target * getStep(viewport, total),
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      })
    },
    [total]
  )

  // quem pede menos movimento no sistema começa com a troca automática desligada
  useEffect(() => {
    if (prefersReducedMotion()) setIsPlaying(false)
  }, [])

  // a notícia atual é a que está encaixada na área visível
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    let frame = 0

    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const step = getStep(viewport, total)
        if (!step) return

        const index = Math.round(viewport.scrollLeft / step)
        setCurrent(Math.min(Math.max(index, 0), total - 1))
      })
    }

    viewport.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      viewport.removeEventListener('scroll', handleScroll)
    }
  }, [total])

  // troca automática: o intervalo recomeça a cada mudança de notícia
  useEffect(() => {
    if (!isPlaying || isHeld || !hasControls) return

    const timer = window.setInterval(() => {
      if (!document.hidden) goTo(current + 1)
    }, interval)

    return () => window.clearInterval(timer)
  }, [isPlaying, isHeld, hasControls, current, interval, goTo])

  // navegar por conta própria encerra a troca automática
  const navigate = (index: number) => {
    setIsPlaying(false)
    goTo(index)
  }

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsHeld(false)
    }
  }

  if (total === 0) return null

  return (
    <S.Wrapper
      aria-roledescription="carrossel"
      aria-labelledby="news-carousel-title"
      onMouseEnter={() => setIsHeld(true)}
      onMouseLeave={() => setIsHeld(false)}
      onFocus={() => setIsHeld(true)}
      onBlur={handleBlur}
    >
      <S.Top>
        <h2 id="news-carousel-title">Últimas notícias</h2>
        <Link href="/noticias" passHref>
          <TextLink>Ver todas</TextLink>
        </Link>
      </S.Top>

      <S.Viewport
        ref={viewportRef}
        aria-live={isPlaying ? 'off' : 'polite'}
        onPointerDown={() => setIsPlaying(false)}
      >
        {items.map((item, index) => {
          const isCurrent = index === current
          // só a notícia visível entra na ordem de tabulação
          const tabIndex = isCurrent ? undefined : -1

          return (
            <S.Slide
              key={item.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${total}`}
              aria-hidden={!isCurrent}
            >
              <Link href={`/noticia/${item.slug}`} passHref>
                <S.Cover tabIndex={-1} aria-hidden="true">
                  <Image
                    src={item.imagem}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    sizes="(max-width: 768px) 100vw, 560px"
                    priority={index === 0}
                    lazyRoot={viewportRef}
                  />
                </S.Cover>
              </Link>

              <S.Body>
                <S.Meta>
                  {index === 0 && <span>Mais recente</span>}
                  <time dateTime={IsoDay(item.createdAt)}>
                    {LongDate(item.createdAt)}
                  </time>
                </S.Meta>

                <Link href={`/noticia/${item.slug}`} passHref>
                  <S.Title tabIndex={tabIndex}>{item.titulo}</S.Title>
                </Link>

                {!!item.descricao && <S.Excerpt>{item.descricao}</S.Excerpt>}
              </S.Body>
            </S.Slide>
          )
        })}
      </S.Viewport>

      {hasControls && (
        <S.Controls>
          <S.Navigation>
            <S.ControlButton
              type="button"
              aria-label="Notícia anterior"
              onClick={() => navigate(current - 1)}
            >
              <FiChevronLeft aria-hidden="true" />
            </S.ControlButton>

            <S.Dots>
              {items.map((item, index) => (
                <S.Dot
                  key={item.slug}
                  type="button"
                  aria-label={`Ir para a notícia ${index + 1} de ${total}`}
                  aria-current={index === current ? 'true' : undefined}
                  onClick={() => navigate(index)}
                />
              ))}
            </S.Dots>

            <S.ControlButton
              type="button"
              aria-label="Próxima notícia"
              onClick={() => navigate(current + 1)}
            >
              <FiChevronRight aria-hidden="true" />
            </S.ControlButton>
          </S.Navigation>

          <S.ControlButton
            type="button"
            aria-label={
              isPlaying
                ? 'Pausar a troca automática de notícias'
                : 'Retomar a troca automática de notícias'
            }
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? (
              <FiPause aria-hidden="true" />
            ) : (
              <FiPlay aria-hidden="true" />
            )}
          </S.ControlButton>
        </S.Controls>
      )}
    </S.Wrapper>
  )
}

export default NewsCarousel
