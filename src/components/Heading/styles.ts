/* eslint-disable @typescript-eslint/no-non-null-assertion */
import media from 'styled-media-query'
import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.div<HeadingProps>`
  ${({ theme, color, size, align }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.thin};
    text-align: ${align};
    line-height: 1;
    position: relative;
    z-index: 99;

    ${!!size && wrapperModifiers[size](theme)}

    ${media.lessThan('small')`
      word-wrap: break-word;
    `}
  `}
`
