import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    ${media.greaterThan('medium')`
      padding: 12rem 20rem;
      flex-direction: row;
    `}
  `}
`

export const ContactLeft = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    flex: 1;
  `}
`

export const ContactRight = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30vh;
    background-color: ${theme.colors.lightBrown};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      width: 40rem;
      height: 75vh;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const ContactBox = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.3s;

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`

export const Form = styled.form`
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
