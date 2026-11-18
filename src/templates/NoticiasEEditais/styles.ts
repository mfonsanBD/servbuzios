import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

export const Section = styled.section`
  padding: 1.6rem 2.4rem 9.6rem;

  @media (max-width: 600px) {
    padding: 0.8rem 2.4rem 7.2rem;
  }
`

export const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Featured = styled.article`
  ${({ theme }) => css`
    ${autoGrid({ min: '44rem', gap: '1.6rem', fit: true })}
    align-items: center;
    padding: 1.6rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusBlock};
    box-shadow: ${theme.shadows.cardLarge};
  `}
`

export const FeaturedCover = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: block;
    aspect-ratio: 4 / 3;
    border-radius: 2.2rem;
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
  `}
`

export const FeaturedBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 2rem 2.4rem;

  @media (max-width: 600px) {
    padding: 1.2rem 0.8rem 0.8rem;
  }
`

export const Meta = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem 1rem;
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};

    span {
      padding: 0.3rem 1rem;
      border-radius: ${theme.border.radiusPill};
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.semibold};
    }
  `}
`

export const FeaturedTitle = styled.a`
  ${({ theme }) => css`
    font-size: clamp(2.6rem, 2.6vw, 3.4rem);
    line-height: 1.15;
    letter-spacing: -0.025em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    overflow-wrap: anywhere;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const FeaturedText = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.text};
  `}
`

export const Grid = styled.div`
  ${autoGrid({ min: '32rem', gap: '2rem' })}
  scroll-margin-top: 10rem;
`

export const PaginationArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`

export const Summary = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};
    font-variant-numeric: tabular-nums;
    text-align: center;
  `}
`
