import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 5rem;

    ${media.greaterThan('medium')`
    padding: 12rem ${theme.spacings.xxlarge};
    flex-direction: row;
  `}
  `}
`

export const ContactLeft = styled.div``

export const ContactRight = styled.div``

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TextAreaField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    label {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      cursor: pointer;
    }

    textarea {
      color: ${theme.colors.gray};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xxsmall};
      background: ${theme.colors.dark};
      border-radius: 0.2rem;
      border: 0.2rem solid;
      border-color: ${theme.colors.dark};
      outline: none;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
          ${theme.colors.inputBg} inset;
        filter: none;

        &::first-line {
          font-family: ${theme.font.family};
          font-size: ${theme.font.sizes.medium};
        }
      }
    }
  `}
`
