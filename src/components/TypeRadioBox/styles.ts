import styled, { css } from 'styled-components'

type IconProps = {
  model?: string
  modelType?: string
}

export const Wrapper = styled.label<IconProps>`
  ${({ theme, model, modelType }) => css`
    width: 20rem;
    height: 13rem;
    padding: ${theme.spacings.small};
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

      ${Label} {
        color: ${theme.colors.white};
      }
      ${Icon} {
        background: url(${model === 'plus'
          ? `/img/types/${model}-white.svg`
          : `/img/types/${model}-${modelType}-white.svg`});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  `}
`

export const Label = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    line-height: 1;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  `}
`

export const Icon = styled.div<IconProps>`
  ${({ model, modelType }) => css`
    background: url(${model === 'plus'
      ? `/img/types/${model}-dark.svg`
      : `/img/types/${model}-${modelType}-dark.svg`});
    width: 100%;
    height: 5rem;
    background-repeat: no-repeat;
    background-position: center;
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
