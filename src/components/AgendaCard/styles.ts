import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 34.5rem;
    height: 23rem;
    background-color: ${theme.colors.gray};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.border.radiusLarge};
  `}
`

export const DateArea = styled.small`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    padding: ${theme.spacings.xsmall};
    line-height: 1;
    border-radius: ${theme.border.radiusLarge};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.title};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radiusLarge};
  `}
`
