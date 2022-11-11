/* eslint-disable @typescript-eslint/no-non-null-assertion */
import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

export const Wrapper = styled.div<HeadingProps>`
  ${({ theme, color, align }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.light};
    text-align: ${align};
    line-height: 1;
    position: relative;
    word-wrap: break-word;
    font-size: ${theme.font.sizes.xxxlarge};

    ${media.greaterThan('medium')`
      word-wrap: normal;
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`
