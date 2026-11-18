import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 2rem;
    background: ${theme.colors.white};
    border-radius: 2.8rem;
    box-shadow: ${theme.shadows.float};
  `}
`

export const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    padding: 0 0.4rem;

    h2 {
      font-size: 1.5rem;
      font-weight: ${theme.font.semibold};
    }
  `}
`

// Faixa rolável: cada notícia ocupa a largura inteira e encaixa (scroll-snap).
export const Viewport = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

export const Cover = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: ${theme.border.radiusInner};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
  `}
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 0.4rem;
`

export const Meta = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem 1rem;
    min-height: 2.6rem;
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};

    span {
      padding: 0.3rem 1rem;
      border-radius: ${theme.border.radiusPill};
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.semibold};
    }
  `}
`

export const Title = styled.a`
  ${({ theme }) => css`
    font-size: 2.4rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: 1.5rem;
    color: ${theme.colors.text};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`

export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    padding-top: 1.4rem;
    border-top: 1px solid ${theme.colors.line};
  `}
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

export const ControlButton = styled.button`
  ${({ theme }) => css`
    flex: none;
    width: 4.4rem;
    height: 4.4rem;
    border: 0;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.background};
    color: ${theme.colors.title};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.primary};
    }
  `}
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
`

// Área de toque de 2.8rem x 4.4rem; o indicador visível é o ::before.
export const Dot = styled.button`
  ${({ theme }) => css`
    width: 2.8rem;
    height: 4.4rem;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: ${theme.border.radiusPill};
      background: ${theme.colors.fieldBorder};
      transition: width ${theme.transition.default},
        background ${theme.transition.default};
    }

    &:hover::before {
      background: ${theme.colors.textMuted};
    }

    &[aria-current='true'] {
      width: 4rem;

      &::before {
        width: 2.4rem;
        background: ${theme.colors.primary};
      }
    }
  `}
`
