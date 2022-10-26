import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray};
    background-position: center center;
    background-size: cover;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    ${media.greaterThan('medium')`
      width: 106%;
      height: 100vh;

      &::after {
        display: none;
      }
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      height: 100vh;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
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

export const Subtitle = styled.p`
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
