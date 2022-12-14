import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 4.5rem;
    `}
  `}
`

export const FooterArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding-bottom: 4.5rem;
    `}
  `}
`

export const FooterTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transition: 0.3s;

    &:hover {
      color: ${darken(0.2, theme.colors.white)};
    }

    &.active {
      color: ${theme.colors.tertiary};
      transition: 0.3s;

      &:hover {
        color: ${darken(0.1, theme.colors.tertiary)};
      }
    }
  `}
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
    border-top: thin solid ${theme.colors.white};
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
