import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 45%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radiusLarge};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  `}
`

export const Nome = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    line-height: 1;
  `}
`

export const Oab = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    margin-bottom: 1rem;
  `}
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    transition: 0.3s;

    &:hover {
      color: ${lighten(0.1, theme.colors.primary)};
    }
  `}
`

export const ButtonsArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};
  `}
`

export const AgendaButton = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radiusNormal};

    &.email {
      border: thin solid ${theme.colors.text};
      color: ${theme.colors.text};
      transition: 0.3s;

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.text};
      }
    }

    &.whatsapp {
      border: thin solid ${theme.colors.success};
      color: ${theme.colors.success};
      transition: 0.3s;

      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.success};
      }
    }
  `}
`
