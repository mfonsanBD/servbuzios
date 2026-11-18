import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.6rem;
`

export const SearchLabel = styled.label`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const SearchField = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 52rem;
    min-height: 5.6rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusPill};
    box-shadow: ${theme.shadows.card};
    transition: box-shadow ${theme.transition.fast};

    &:focus-within {
      box-shadow: 0 0 0 0.3rem ${theme.colors.accent}, ${theme.shadows.card};
    }

    svg {
      flex: none;
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.textMuted};
    }

    input {
      flex: 1;
      min-width: 0;
      min-height: 4.4rem;
      border: 0;
      background: transparent;
      font-family: ${theme.font.family};
      font-size: 1.5rem;
      color: ${theme.colors.title};

      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
  `}
`

export const SearchStatus = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};
  `}
`

export const Grid = styled.section`
  padding: 1.6rem 2.4rem 9.6rem;

  @media (max-width: 600px) {
    padding-bottom: 6.4rem;
  }
`

export const Cards = styled(Container)`
  ${autoGrid({ min: '26rem', gap: '2rem' })}
`
