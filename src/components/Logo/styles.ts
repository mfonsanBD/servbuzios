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

      img {
        height: 7rem;
        pointer-events: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size, hideOnMobile }) => css`
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`
