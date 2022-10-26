/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    background-color: ${theme.colors.gray};
    background-position: center center;
    background-size: cover;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      height: 100vh;
    `}
  `}
`

type BackgroundProps = {
  background: 'lightBrown' | 'dark' | 'black'
}

export const Caption = styled.div<BackgroundProps>`
  ${({ theme, background }) => css`
    height: 50vh;
    background-color: ${theme.colors[background!]};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
      height: 100vh;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.Helvetica};
    font-size: calc(${theme.font.sizes.huge} - 0.8rem);
    line-height: 1;
    margin-bottom: 1rem;

    @media (max-width: 321px) {
      font-size: ${theme.font.sizes.xxlarge};
    }

    ${media.greaterThan('medium')`
      font-size: calc(${theme.font.sizes.huge} + 1rem);
    `}
  `}
`
