import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 15rem;
    height: 3.3rem;
  `,

  normal: () => css`
    width: 20.9rem;
    height: 5.5rem;
  `,

  large: () => css`
    width: 25rem;
    height: 6.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 7rem;
      height: 7rem;

      svg{
        height: 7rem;
        pointer-events: none;
      }

      .text{
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    svg {
      fill: ${theme.colors[color!]};
    }
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`
