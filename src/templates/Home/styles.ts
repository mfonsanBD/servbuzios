import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as ButtonStyles from 'components/Button/styles'
import * as HeadingStyles from 'components/Heading/styles'

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

export const AvaliacaoSection = styled.div`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.small} 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge} 0;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5rem;
    `}
  `}
`

export const AvaliacaoText = styled.div`
  ${({ theme }) => css`
    width: 32rem;

    h1 {
      width: 100%;
      color: ${theme.colors.white};
      line-height: 1;
      margin-bottom: ${theme.spacings.xsmall};
      font-size: calc(${theme.font.sizes.huge} + 1rem);
      font-weight: ${theme.font.bold};
    }

    p {
      color: ${theme.colors.brown};
      font-size: ${theme.font.sizes.large};

      span {
        color: ${theme.colors.white};
      }
    }

    ${media.greaterThan('medium')`
      width: 40rem;

      h1 {
        font-size: calc(${theme.font.sizes.huge} + 2rem);
        font-weight: 700;
      }
    `}
  `}
`

export const ImagemArea = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  ${media.greaterThan('medium')`
    width: 35%;

    img {
      width: 100%;
    }
  `}
`

export const Extremidade = styled.div``

export const Chao = styled.div``

export const FeaturesSection = styled.section`
  ${({ theme }) => css`
    padding: 12rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};

      ${HeadingStyles.Wrapper} {
        margin-bottom: 3rem;
      }
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
    padding: 12rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};

      ${HeadingStyles.Wrapper} {
        margin-bottom: 3rem;
      }
    `}
  `}
`

export const ProductsArea = styled.div`
  display: grid;
  margin-top: 5rem;
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
      padding: 12rem;
    `}
  `}
`

export const NewsSectionHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width: 321px) {
      flex-direction: column;
      align-items: flex-start;
    }

    ${ButtonStyles.Wrapper} {
      width: 50%;
      padding: ${theme.spacings.xxsmall};

      ${media.greaterThan('medium')`
        width: 10%;
      `}
    }
  `}
`

export const Posts = styled.div`
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
