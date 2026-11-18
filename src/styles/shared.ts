import styled, { css } from 'styled-components'

/**
 * Peças de layout reaproveitadas pelas páginas do novo design.
 * Tudo aqui é fluido: nada de larguras fixas, grades com auto-fill/auto-fit.
 */

type GridOptions = {
  min: string
  gap?: string
  fit?: boolean
}

// Grade responsiva sem media query. `fit: true` estica os itens para ocupar a linha.
export const autoGrid = ({
  min,
  gap = '2rem',
  fit = false
}: GridOptions) => css`
  display: grid;
  grid-template-columns: repeat(
    ${fit ? 'auto-fit' : 'auto-fill'},
    minmax(min(${min}, 100%), 1fr)
  );
  gap: ${gap};
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusCard};
    box-shadow: ${theme.shadows.card};
  `}
`

export const DarkBlock = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 3.6rem;
    padding: 4.8rem;

    @media (max-width: 600px) {
      border-radius: ${theme.border.radiusCard};
      padding: 3.2rem 2.4rem;
    }
  `}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    font-size: clamp(2.8rem, 3vw, 4rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    text-wrap: balance;
  `}
`

export const SectionText = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.text};
  `}
`

type MediaFrameProps = {
  $ratio?: string
}

// Moldura para next/image com layout="fill": define proporção, raio e fundo.
export const MediaFrame = styled.div<MediaFrameProps>`
  ${({ theme, $ratio = '1 / 1' }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: ${$ratio};
    border-radius: ${theme.border.radiusInner};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
  `}
`

export const TextLink = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 4.4rem;
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.primary};
    cursor: pointer;

    svg {
      flex: none;
      transition: transform ${theme.transition.fast};
    }

    &:hover svg {
      transform: translateX(0.3rem);
    }
  `}
`
