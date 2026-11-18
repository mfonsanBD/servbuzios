import styled, { css } from 'styled-components'

import { autoGrid, Container, DarkBlock } from 'styles/shared'

/* ---------- navegação da página ---------- */

export const SectionNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: 0.2rem;
    max-width: 100%;
    margin-top: 0.6rem;
    padding: 0.6rem;
    overflow-x: auto;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusPill};
    box-shadow: ${theme.shadows.pill};
  `}
`

export const SectionLink = styled.a`
  ${({ theme }) => css`
    padding: 1.2rem 1.6rem;
    border-radius: ${theme.border.radiusPill};
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: ${theme.font.medium};
    white-space: nowrap;
    color: ${theme.colors.title};
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    &:hover {
      background: ${theme.colors.background};
      color: ${theme.colors.primary};
    }
  `}
`

/* ---------- seções ---------- */

type SectionProps = {
  $first?: boolean
  $last?: boolean
}

export const Section = styled.section<SectionProps>`
  ${({ $first, $last }) => css`
    padding: ${$first ? '1.6rem' : '0'} 2.4rem ${$last ? '9.6rem' : '6.4rem'};
    scroll-margin-top: 2.4rem;

    @media (max-width: 600px) {
      padding-bottom: ${$last ? '6.4rem' : '4.8rem'};
    }
  `}
`

export const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const ListCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 2rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusBlock};
    box-shadow: ${theme.shadows.cardLarge};

    @media (max-width: 600px) {
      padding: 0.8rem 1.2rem;
    }
  `}
`

export const LawsGrid = styled.div`
  ${autoGrid({ min: '42rem', gap: '0 3.2rem', fit: true })}
`

/* ---------- editais por ano ---------- */

export const Years = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Year = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 2.4rem;
    box-shadow: ${theme.shadows.card};
  `}
`

export const YearButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    min-height: 6.4rem;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 2.4rem;
    background: transparent;
    font-family: inherit;
    color: ${theme.colors.title};
    text-align: left;
    cursor: pointer;

    svg {
      flex: none;
      width: 2.2rem;
      height: 2.2rem;
      color: ${theme.colors.primary};
    }

    &:hover strong {
      color: ${theme.colors.primary};
    }

    @media (max-width: 600px) {
      padding: 0 1.6rem;
    }
  `}
`

export const YearLabel = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.4rem 1.2rem;

    strong {
      font-size: 1.8rem;
      font-weight: ${theme.font.semibold};
      transition: color ${theme.transition.fast};
    }

    span {
      font-size: 1.4rem;
      color: ${theme.colors.textMuted};
    }
  `}
`

export const YearPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem 1.2rem;

  &[hidden] {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 0 0.8rem 0.8rem;
  }
`

/* ---------- jornal ---------- */

export const Journal = styled(DarkBlock)`
  ${autoGrid({ min: '30rem', gap: '4rem', fit: true })}
  align-items: center;
`

export const JournalText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;

    h2 {
      font-size: clamp(2.8rem, 3vw, 4rem);
      line-height: 1.12;
      letter-spacing: -0.03em;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.accent};
    }

    p {
      font-size: 1.6rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const Covers = styled.div`
  ${autoGrid({ min: '15rem', gap: '1.6rem' })}
`

export const CoverArt = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 210 / 297;
    border-radius: 1.6rem;
    overflow: hidden;
    background: ${theme.colors.white};
  `}
`

export const Cover = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${theme.colors.white};

    span {
      font-size: 1.4rem;
      font-weight: ${theme.font.semibold};
    }

    &:hover span {
      color: ${theme.colors.accent};
    }
  `}
`
