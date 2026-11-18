import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-height: 5.2rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.fieldBorder};
    border-radius: ${theme.border.radiusField};
    transition: border-color ${theme.transition.fast},
      box-shadow ${theme.transition.fast};

    &:focus-within {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 0.3rem ${theme.colors.accentSoft};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    min-height: 5rem;
    background: transparent;
    border: 0;
    color: ${theme.colors.title};
    font-family: ${theme.font.family};
    font-size: 1.5rem;

    /* o destaque de foco fica na moldura (InputWrapper) */
    &:focus,
    &:focus-visible {
      outline: none;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.white}
        inset;
      filter: none;

      &::first-line {
        font-family: ${theme.font.family};
        font-size: 1.5rem;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    cursor: pointer;

    span {
      color: ${theme.colors.danger};
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: 1.3rem;
    margin-top: 0.6rem;
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background: ${theme.colors.background};
    }

    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.textMuted};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    width: 100%;
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
