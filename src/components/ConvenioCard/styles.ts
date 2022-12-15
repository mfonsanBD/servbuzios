import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ClickedArea = styled.div`
  cursor: pointer;
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 2rem;
    right: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    cursor: pointer;
    z-index: ${theme.layers.base};

    svg {
      color: ${theme.colors.white};
      cursor: pointer;
    }
  `}
`

export const ModalMain = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.modal};
  `}
`
