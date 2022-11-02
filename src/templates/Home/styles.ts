import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
`

export const LogoAreaHome = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    z-index: 99;
  `}
`

export const AboutSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 8rem;

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
      flex-direction: row;
    `}
  `}
`

export const AboutLeft = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 80%;
  `}
`

export const AboutText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
  `}
`

export const AboutRight = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 38.8rem;
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`

export const FeaturesSection = styled.section`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small} 12rem;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge} 12rem;
    `}
  `}
`

export const FeaturesTitleArea = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 55%;
  `}
`

export const FeaturesArea = styled.div`
  display: grid;
  margin-top: 8rem;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3.2rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(39rem, 1fr));
    margin-top: 0;
  `}
`

export const ProductsSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    padding: 12rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const ProductsArea = styled.div`
  display: grid;
  margin-top: 8rem;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3.2rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
    margin-top: 0;
  `}
`

export const NewsSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const MeowSection = styled.section`
  ${({ theme }) => css`
    background-image: url('/img/meow.jpeg');
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 12rem ${theme.spacings.small};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(225, 201, 175, 0.85);
    }

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`
