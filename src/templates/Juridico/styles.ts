import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

export const Section = styled.section`
  padding: 1.6rem 2.4rem 9.6rem;
`

export const Grid = styled(Container)`
  ${autoGrid({ min: '46rem', gap: '2.4rem', fit: true })}
  align-items: start;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 0;
`

export const Dark = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    padding: 3.6rem;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radiusBlock};
    color: ${theme.colors.white};

    @media (max-width: 600px) {
      padding: 2.8rem 2.4rem;
    }
  `}
`

export const DarkTitle = styled.h2`
  ${({ theme }) => css`
    font-size: clamp(2.6rem, 2.6vw, 3.4rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.accent};
  `}
`

export const DarkText = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.onDark};
  `}
`

export const ProcessBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    max-width: 100%;
    padding: 1.4rem 1.8rem;
    border-radius: 1.6rem;
    background: rgba(255, 255, 255, 0.1);

    span:first-child {
      font-size: 1.3rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const ProcessNumber = styled.span`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.semibold};
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.01em;
    overflow-wrap: anywhere;
  `}
`

export const Lawyers = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 2.8rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusBlock};
    box-shadow: ${theme.shadows.card};

    @media (max-width: 600px) {
      padding: 2.4rem;
    }
  `}
`

export const LawyersTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    li + li {
      padding-top: 1.8rem;
      border-top: 1px solid ${theme.colors.line};
    }
  `}
`

export const Note = styled.p`
  ${({ theme }) => css`
    padding-top: 1.6rem;
    border-top: 1px solid ${theme.colors.line};
    font-size: 1.4rem;
    color: ${theme.colors.text};
  `}
`

export const Empty = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.text};
  `}
`
