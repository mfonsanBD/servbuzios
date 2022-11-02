/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    line-height: 1;
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.small};
    text-align: center;
    line-height: 1;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -1rem;
      transform: translateX(-50%);
      width: 5rem;
      margin: 0 auto;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.div<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};
    font-weight: ${theme.font.thin};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}

    ${media.lessThan('small')`
      word-wrap: break-word;
    `}
  `}
`
