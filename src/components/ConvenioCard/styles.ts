import styled, { css } from 'styled-components'

type WrapperProps = {
  $isOpen: boolean
}

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    padding: 1.2rem 1.2rem 2rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusCard};
    box-shadow: ${theme.shadows.card};
    transition: box-shadow ${theme.transition.default},
      transform ${theme.transition.default};

    &:hover {
      box-shadow: ${theme.shadows.float};
      transform: translateY(-0.2rem);
    }

    /* com o modal aberto, um transform no cartão prenderia o position: fixed do modal a ele */
    ${$isOpen &&
    css`
      &,
      &:hover {
        transform: none;
        transition: none;
      }
    `}
  `}
`

export const Art = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${theme.border.radiusInner};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
    cursor: pointer;
  `}
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0 1rem;
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: 1.7rem;
    line-height: 1.3;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const Open = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 4.4rem;
    padding: 0;
    border: 0;
    background: transparent;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.primary};
    cursor: pointer;

    svg {
      flex: none;
      transition: transform ${theme.transition.fast};
    }

    &:hover svg {
      transform: translateX(0.3rem);
    }
  `}
`

export const ModalFrame = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: min(90vw, 90vh, 72rem);
    aspect-ratio: 1 / 1;
    border-radius: ${theme.border.radiusInner};
    overflow: hidden;
  `}
`
