import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.main``

export const PresidenteSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
      flex-direction: row;
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

export const PresidenteTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.xxxlarge};
    text-transform: uppercase;
    line-height: 1;
  `}
`

export const PresidenteText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`

export const PresidenteName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
  `}
`

export const AgendaSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 8rem ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: 8rem;
    }

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const NeESection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: 8rem;
    }

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const NewsAreaHome = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    margin-top: 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(43rem, 1fr));
    margin-top: 0;
  `}
`

export const SindicatoSection = styled.section`
  margin-bottom: 70rem;
  position: relative;

  ${media.greaterThan('medium')`
    margin-bottom: 30rem;
  `}
`

export const SindicatoCover = styled.div`
  width: 100%;
  height: 57.3rem;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SindicatoContent = styled.div`
  ${({ theme }) => css`
    width: 90%;
    position: absolute;
    left: 50%;
    bottom: -60rem;
    transform: translateX(-50%);
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radiusLarge};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

    ${media.greaterThan('medium')`
      width: 60%;
      bottom: -20rem;
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    text-align: center;
  `}
`

export const ConvenioSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 8rem ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: 8rem;
    }

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const ConvenioArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    margin-top: 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    margin-top: 0;
  `}
`
