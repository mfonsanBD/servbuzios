/* eslint-disable @typescript-eslint/no-non-null-assertion */
import media from 'styled-media-query'
import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

type TitleProps = Pick<HeadingProps, 'backgroundTitle'>

export const Title = styled.h1<TitleProps>`
  ${({ theme, backgroundTitle }) => css`
    color: ${theme.colors.title};
    font-weight: ${theme.font.bold};
    text-align: center;
    line-height: 1;
    position: relative;
    word-wrap: break-word;
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xxxlarge};

    &::after {
      content: '${backgroundTitle}';
      width: 100%;
      color: rgba(0, 0, 0, 0.05);
      font-size: ${theme.font.sizes.huge};
      position: absolute;
      left: 50%;
      top: -10px;
      bottom: 0;
      right: 0;
      transform: translateX(-50%);
    }

    ${media.greaterThan('medium')`
      word-wrap: normal;
      font-size: ${theme.font.sizes.huge};

      &::after {
        font-size: calc(${theme.font.sizes.huge} + 2rem);
      }
    `}
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    position: relative;
    word-wrap: break-word;

    ${media.greaterThan('medium')`
      word-wrap: normal;
      text-align: center;
    `}

    ${media.greaterThan('huge')`
      width: 107.4rem;
      margin: 0 auto;
    `}
  `}
`
