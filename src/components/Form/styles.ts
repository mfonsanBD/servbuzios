import { lighten } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.form``

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.title};
    cursor: pointer;
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radiusNormal};
    border: none;
    color: ${theme.colors.title};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    outline: none;
    padding: calc(${theme.spacings.xsmall} - 0.5rem)
      calc(${theme.spacings.small} - 0.4rem);
    margin-top: 0.5rem;
  `}
`

type TextAreaProps = {
  disabled: boolean
}

const textareaModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Textarea} {
      cursor: not-allowed;
      color: ${lighten(0.3, theme.colors.text)};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const TextSection = styled.div<TextAreaProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    ${disabled && textareaModifiers.disabled(theme)}
  `}
`

export const ButtonArea = styled.div`
  text-align: center;
`
