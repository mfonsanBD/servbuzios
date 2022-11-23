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

  minimal: (theme: DefaultTheme) => css`
    background: none;
    border: thin solid ${theme.colors.white};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.gray};
      border: thin solid ${theme.colors.gray};
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
    color: ${color === 'lightBrown' ? theme.colors.dark : theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    text-decoration: none;

    &:hover {
      background: ${minimal ? 'none' : darken(0.1, theme.colors[color!])};
      color: ${theme.colors.white};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
