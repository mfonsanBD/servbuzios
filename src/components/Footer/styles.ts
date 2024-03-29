import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.large} ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 4.5rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const FooterArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: ${theme.spacings.small};
    gap: 4rem;

    ${media.greaterThan('medium')`
      padding-bottom: 4.5rem;
      flex-direction: row;
    `}
  `}
`

export const FooterTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  ${media.greaterThan('medium')`
    h4 {
      margin-bottom: 2rem;
    }
  `}
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
  justify-content: flex-start;
  gap: 0.5rem;

  ${media.greaterThan('medium')`
    justify-content: center;
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
    border-top: thin solid ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    ${media.greaterThan('medium')`
      padding-top: 4.5rem;
      flex-direction: row;
      align-items: center;
    `}
  `}
`

export const DataArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`

export const Cnpj = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Location = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const SindicatosLogos = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const CreatedBy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
