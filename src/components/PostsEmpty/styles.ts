import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    padding: 4.8rem 2.4rem;
    text-align: center;
    font-size: 1.5rem;
    color: ${theme.colors.text};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusCard};
    box-shadow: ${theme.shadows.card};

    svg {
      max-width: 100%;
    }
  `}
`
