import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.inputBg};
    border-radius: 0.3rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.inputBg};
    margin-top: 0.5rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: calc(${theme.spacings.xsmall} - 0.5rem) 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.inputBg}
        inset;
      filter: none;

      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.dark};
    cursor: pointer;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
