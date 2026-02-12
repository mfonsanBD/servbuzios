import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 6rem;
    height: 6rem;
  `,

  normal: () => css`
    width: 9rem;
    height: 9rem;
  `,

  large: () => css`
    width: 12rem;
    height: 12rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 7rem;
      height: 7rem;

      svg{
        height: 7rem;
        pointer-events: none;
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

    svg path.escuro {
      fill: ${color === 'white'
        ? theme.colors.white
        : color === 'text'
        ? theme.colors.text
        : theme.colors.secondary};
    }
  `}
`
