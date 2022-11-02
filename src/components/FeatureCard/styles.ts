import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    border: thin solid ${theme.colors.lightBrown};
    border-radius: ${theme.border.radius};
    padding: 3rem;

    svg {
      color: ${theme.colors.lightBrown};
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`
