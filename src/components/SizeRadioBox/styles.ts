import styled, { css } from 'styled-components'

export const Wrapper = styled.label`
  ${({ theme }) => css`
    width: 15rem;
    height: 10rem;
    padding: ${theme.spacings.medium};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.light};
    border-radius: ${theme.border.radius};
    transition: background ${theme.transition.fast};
    cursor: pointer;

    &:has(${Input}:checked) {
      background-color: ${theme.colors.lightBrown};

      ${Label}, ${Description} {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const Label = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    line-height: 1;
    margin-bottom: 0.5rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    line-height: 1;
    text-align: center;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.inputBg};
    border-radius: 50%;
    background: ${theme.colors.inputBg};
    transition: background ${theme.transition.fast};
    outline: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.lightBrown};
    }

    &:before {
      content: '';
      background-color: transparent;
      opacity: 0;
      position: absolute;

      width: 3px;
      border-bottom: 3px solid ${theme.colors.lightBrown};
      height: 7px;
      border-right: 3px solid ${theme.colors.lightBrown};

      transform: rotate(45deg);
    }

    &:checked {
      background: ${theme.colors.white};
      border: none;

      &:before {
        opacity: 1;
      }
    }
  `}
`
