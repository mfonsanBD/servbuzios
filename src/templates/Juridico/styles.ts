import { darken } from 'polished'
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge};
    `}

    ${HeadingStyles.Wrapper} {
      margin: 8rem 0;

      ${media.greaterThan('medium')`
        margin: 12rem 0 8rem;
      `}
    }
  `}
`

export const AdvogadoSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.medium};
    margin-top: 8rem;

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
      flex-direction: row;
      margin-top: 12rem;
    `}

    ${media.greaterThan('huge')`
      padding: 12rem 25rem;
    `}
  `}
`

export const PhotoArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 50.8rem;
    overflow: hidden;
    border-radius: ${theme.border.radiusLarge};
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const InfoArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      gap: ${theme.spacings.medium};
    `}
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.xxxlarge};
    text-transform: uppercase;
    line-height: 1;
  `}
`

export const OutherDatas = styled.div``

export const Datas = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacings.xxsmall};
    margin-top: 0.5rem;
  `}
`

export const OAB = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
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

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    transition: 0.3s;

    &:hover {
      color: ${darken(0.05, theme.colors.primary)};
    }
  `}
`

export const Bio = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`
