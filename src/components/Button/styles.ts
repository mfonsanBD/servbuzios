/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'color' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: DefaultTheme, color: 'primary' | 'white') => css`
    background: none;
    border: 2px solid ${theme.colors[color]};
    color: ${theme.colors[color]};
    font-weight: ${theme.font.bold};

    &:hover {
      color: ${darken(0.1, theme.colors[color])};
      border: 2px solid ${darken(0.1, theme.colors[color])};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors[color!]};
    color: ${color === 'primary' ? theme.colors.white : theme.colors.title};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radiusLarge};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    text-decoration: none;

    &:hover {
      background: ${minimal ? 'none' : darken(0.1, theme.colors[color!])};
      color: ${color === 'primary' ? theme.colors.white : theme.colors.title};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!minimal && wrapperModifiers.minimal(theme, color!)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
