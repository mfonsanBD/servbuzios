/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'color' | 'fullWidth' | 'minimal'>

type ButtonColor = NonNullable<ButtonProps['color']>

const sizeModifiers = {
  small: () => css`
    min-height: 4.4rem;
    padding: 0 1.8rem;
    font-size: 1.4rem;
  `,

  medium: () => css`
    min-height: 4.8rem;
    padding: 0 2.2rem;
    font-size: 1.5rem;
  `,

  large: () => css`
    min-height: 5.6rem;
    padding: 0 2.8rem;
    font-size: 1.6rem;
  `
}

const colorModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.button};

    &:hover {
      background: ${darken(0.05, theme.colors.primary)};
      color: ${theme.colors.white};
    }
  `,

  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.title};
    box-shadow: ${theme.shadows.pill};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      box-shadow: ${theme.shadows.cardLarge};
    }
  `,

  accent: (theme: DefaultTheme) => css`
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};

    &:hover {
      background: ${darken(0.06, theme.colors.accent)};
      color: ${theme.colors.secondary};
    }
  `
}

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: DefaultTheme, color: ButtonColor) => css`
    background: transparent;
    box-shadow: none;
    border: 0.15rem solid currentColor;
    color: ${theme.colors[color]};

    &:hover {
      background: transparent;
      box-shadow: none;
      color: ${theme.colors[color]};
      opacity: 0.85;
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
      box-shadow: none;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, color, fullWidth, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radiusPill};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.semibold};
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    transition: background ${theme.transition.fast},
      box-shadow ${theme.transition.fast}, color ${theme.transition.fast},
      transform ${theme.transition.fast};

    > span {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
    }

    svg {
      flex: none;
      width: 1.8rem;
      height: 1.8rem;
    }

    &:active {
      transform: translateY(0.1rem);
    }

    ${sizeModifiers[size!]()}
    ${colorModifiers[color!](theme)}
    ${!!minimal && wrapperModifiers.minimal(theme, color!)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`
