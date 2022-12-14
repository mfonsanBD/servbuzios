import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    background-color: ${theme.colors.gray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radiusLarge};
    border-top: 5px solid ${theme.colors.text};
  `}
`

export const Content = styled.div``

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    text-align: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  `}
`

export const DateArea = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.text};
    }
  `}
`
