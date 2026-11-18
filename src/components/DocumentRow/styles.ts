import styled, { css } from 'styled-components'

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.font.semibold};
    overflow-wrap: anywhere;
    transition: color ${theme.transition.fast};
  `}
`

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    min-height: 6.8rem;
    padding: 1.2rem 0.8rem;
    border-bottom: 1px solid ${theme.colors.line};
    color: ${theme.colors.title};

    &:last-child {
      border-bottom: 0;
    }

    &:hover ${Title} {
      color: ${theme.colors.primary};
    }
  `}
`

export const Tile = styled.span`
  ${({ theme }) => css`
    flex: none;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 1.4rem;
    background: ${theme.colors.accentSoft};
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const Text = styled.span`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`

export const Date = styled.span`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.textMuted};
    font-variant-numeric: tabular-nums;
  `}
`

export const Pill = styled.span`
  ${({ theme }) => css`
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.4rem;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.background};
    font-size: 1.3rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.primary};
    white-space: nowrap;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  `}
`
