import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.2rem 1.2rem 2.4rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusCard};
    box-shadow: ${theme.shadows.card};
    transition: box-shadow ${theme.transition.default},
      transform ${theme.transition.default};

    &:hover {
      box-shadow: ${theme.shadows.float};
      transform: translateY(-0.2rem);
    }
  `}
`

// As artes das notícias são peças quadradas/verticais com o título no topo:
// moldura 1:1 e corte ancorado em cima.
export const Cover = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${theme.border.radiusInner};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 1.2rem;
`

export const CreatedAt = styled.time`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};
  `}
`

export const Title = styled.a`
  ${({ theme }) => css`
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.015em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`
