/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ImageWrapperProps = {
  img: string
}

export const Wrapper = styled.main<ImageWrapperProps>`
  ${({ img }) => css`
    width: 100%;
    height: 100vh;
    background-image: url('/img/slide/${img}-large-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 321px) {
      background-image: url('/img/slide/${img}-small-mobile.png');
    }

    ${media.greaterThan('medium')`
      background-image: url('/img/slide/${img}-desktop.png');
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding: calc(${theme.spacings.small} - 0.2rem)
      calc(${theme.spacings.small} - 0.2rem) 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;

    ${media.greaterThan('medium')`
      width: 50%;
      padding: calc(${theme.spacings.xxlarge} + 0.6rem);
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: calc(${theme.font.sizes.huge} + 0.5rem);
    line-height: 1;
    font-weight: ${theme.font.thin};
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media (max-width: 321px) {
      font-size: calc(${theme.font.sizes.xxlarge} + 1rem);
    }

    ${media.greaterThan('medium')`
      font-size: calc(${theme.font.sizes.huge} + 4rem);
    `}
  `}
`
