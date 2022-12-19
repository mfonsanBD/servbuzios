import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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

type ModalMainProps = {
  largura: number
  altura: number
}

export const ModalMain = styled.div<ModalMainProps>`
  ${({ theme, largura, altura }) => css`
    width: 90%;
    height: ${largura > altura ? '28vh' : '65vh'};
    position: relative;
    z-index: ${theme.layers.modal};

    ${media.greaterThan('medium')`
      width: ${largura > altura ? '70%' : '30%'};
      height: 90vh;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`
