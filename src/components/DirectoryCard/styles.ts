import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 1.2rem 2.2rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusCard};
    box-shadow: ${theme.shadows.card};
  `}
`

type TileProps = {
  $featured: boolean
}

export const Tile = styled.div<TileProps>`
  ${({ theme, $featured }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: ${theme.border.radiusInner};
    background: ${theme.colors.surfaceMuted};
    font-size: 4.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.primary};

    ${$featured &&
    css`
      background: ${theme.colors.accent};
      border: 0.4rem solid ${theme.colors.primary};
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0 1.2rem;
  margin-top: 1.6rem;
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const Role = styled.p`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.textMuted};
  `}
`
