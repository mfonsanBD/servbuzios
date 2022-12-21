/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const ClickedArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 27rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: ${theme.border.radiusLarge};
    border: thin solid ${theme.colors.gray};

    ${media.greaterThan('321px' as any)`
      height: 33rem;
    `}

    ${media.greaterThan('376px' as any)`
      height: 38rem;
    `}

    ${media.greaterThan('medium')`
      height: 30rem;
    `}

    ${media.greaterThan('huge')`
      height: 28rem;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
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
    width: 30rem;
    height: 30rem;
    position: relative;
    z-index: ${theme.layers.modal};

    ${media.greaterThan('321px' as any)`
      width: 35rem;
      height: 35rem;
    `}

    ${media.greaterThan('376px' as any)`
      width: 39rem;
      height: 39rem;
    `}

    ${media.greaterThan('medium')`
      width: 50rem;
      height: 50rem;
    `}

    ${media.greaterThan('huge')`
      width: 70rem;
      height: 70rem;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`
