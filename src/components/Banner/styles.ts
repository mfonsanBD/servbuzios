import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 10.9rem);
  position: relative;

  ${media.greaterThan('medium')`
    height: calc(100vh - 8.9rem);
  `}

  ${media.greaterThan('huge')`
    height: calc(100vh - 11.9rem);
  `}
`

export const Cover = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    background-image: linear-gradient(
      rgba(31, 70, 101, 0),
      rgba(31, 70, 101, 1)
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.small};
    bottom: 0;
    left: 0;

    ${media.greaterThan('medium')`
      width: 50%;
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, 50%);
      text-align: center;
      padding: calc(${theme.spacings.xxlarge} + 5rem) ${theme.spacings.xxlarge};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: calc(${theme.font.sizes.xxxlarge} + 0.5rem);
    line-height: 1;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    margin-bottom: 2rem;

    @media (max-width: 321px) {
      font-size: calc(${theme.font.sizes.xxlarge} + 1rem);
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 2rem;
  `}
`
