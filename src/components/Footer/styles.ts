import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 4.5rem;
    `}
  `}
`

export const LogoFooterArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    padding-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding-bottom: 4.5rem;
    `}
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
    border-top: thin solid ${theme.colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      padding-top: 4.5rem;
      flex-direction: row;
    `}
  `}
`

export const Copy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};

    ${media.lessThan('medium')`
      text-align: center;
    `}
  `}
`

export const CreatedBy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`
