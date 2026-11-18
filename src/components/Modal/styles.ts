import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layers.alwaysOnTop};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem;
    background: rgba(0, 21, 48, 0.86);
  `}
`

export const Close = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4.8rem;
    height: 4.8rem;
    border: 0;
    border-radius: ${theme.border.radiusPill};
    background: rgba(255, 255, 255, 0.14);
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background ${theme.transition.fast};

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }
  `}
`
