import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

export const Section = styled.section`
  padding: 9.6rem 2.4rem;

  @media (max-width: 600px) {
    padding: 5.6rem 2.4rem;
  }
`

export const Grid = styled(Container)`
  ${autoGrid({ min: '42rem', gap: '5.6rem', fit: true })}
  align-items: center;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: clamp(3.6rem, 4vw, 5.4rem);
    line-height: 1.06;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    text-wrap: balance;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 52rem;
    font-size: 1.7rem;
    color: ${theme.colors.text};
  `}
`

export const Shortcuts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const Panel = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 38rem;
    overflow: hidden;
    border-radius: ${theme.border.radiusCard};
    border: 0.6rem solid ${theme.colors.primary};
    background: ${theme.colors.accent};

    span {
      font-size: clamp(11rem, 13vw, 19rem);
      line-height: 1;
      letter-spacing: -0.05em;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
    }
  `}
`
