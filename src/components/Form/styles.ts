import styled, { css, DefaultTheme } from 'styled-components'

import { autoGrid } from 'styles/shared'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3.2rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusBlock};
    box-shadow: ${theme.shadows.cardLarge};

    @media (max-width: 600px) {
      padding: 2.4rem 2rem;
      border-radius: ${theme.border.radiusCard};
    }
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const FormGroup = styled.div`
  ${autoGrid({ min: '24rem', gap: '1.6rem', fit: true })}
  align-items: start;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    cursor: pointer;
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    min-height: 16rem;
    padding: 1.4rem 1.6rem;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.fieldBorder};
    border-radius: ${theme.border.radiusField};
    color: ${theme.colors.title};
    font-family: ${theme.font.family};
    font-size: 1.5rem;
    line-height: 1.6;
    resize: vertical;
    transition: border-color ${theme.transition.fast},
      box-shadow ${theme.transition.fast};

    &:focus,
    &:focus-visible {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 0.3rem ${theme.colors.accentSoft};
    }
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
      color: ${theme.colors.textMuted};
    }

    ${Textarea} {
      background: ${theme.colors.background};
    }
  `
}

export const TextSection = styled.div<TextAreaProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    ${disabled && textareaModifiers.disabled(theme)}
  `}
`

// o widget do reCAPTCHA tem 304px fixos: em telas estreitas ele é reduzido
export const Captcha = styled.div`
  @media (max-width: 380px) {
    transform: scale(0.85);
    transform-origin: left top;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
`

export const Hint = styled.span`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};
  `}
`
