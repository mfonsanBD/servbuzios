import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${HeadingStyles.Wrapper} {
    margin-bottom: 3rem;
  }
`

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
`

export const LogoAreaHome = styled.div`
  position: absolute;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  z-index: 99;
`

export const HeroAreas = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1;
`

export const ToDown = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: -0.1rem;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;

  ${media.greaterThan('medium')`
    width: 34%;
  `}
`

export const ToDownIconArea = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.black};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: ${theme.colors.lightBrown};
    }

    ${media.greaterThan('medium')`
      width: 6rem;
      height: 6rem;

      svg {
        font-size: 3rem;
      }
    `}
  `}
`

export const HeroLeftArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.greaterThan('medium')`
      width: 70%;
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: calc(${theme.font.sizes.xxlarge} + 0.7rem);
    line-height: 1;
    margin-bottom: 1rem;
    text-align: center;

    span {
      color: ${theme.colors.brown};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
      text-align: left;
    `}
  `}
`

export const HeroSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      text-align: left;
    `}
  `}
`

export const HeroRightArea = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    position: relative;
    display: flex;
    width: 74%;
    height: 100%;
  `}
`

export const AboutSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 3rem;

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
    padding: 0 ${theme.spacings.small} 8rem;

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
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3.2rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(39rem, 1fr));
  `}
`

export const ProductsSection = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 8rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const ProductsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3.2rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(60rem, 1fr));
  `}
`

export const NewsSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`
