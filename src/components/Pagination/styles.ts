import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusPill};
    box-shadow: ${theme.shadows.card};
  `}
`

const circle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 99.9rem;
`

export const Control = styled.button`
  ${({ theme }) => css`
    ${circle}
    color: ${theme.colors.title};
    transition: background ${theme.transition.fast};

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover:not(:disabled) {
      background: ${theme.colors.background};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`

type PageProps = {
  $current: boolean
  $secondary: boolean
}

export const Page = styled.button<PageProps>`
  ${({ theme, $current, $secondary }) => css`
    ${circle}
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    font-variant-numeric: tabular-nums;
    color: ${$current ? theme.colors.white : theme.colors.title};
    background: ${$current ? theme.colors.primary : 'transparent'};
    transition: background ${theme.transition.fast};

    &:hover {
      background: ${$current ? theme.colors.primary : theme.colors.background};
    }

    ${$secondary &&
    css`
      @media (max-width: 480px) {
        display: none;
      }
    `}
  `}
`

export const Ellipsis = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.4rem;
    color: ${theme.colors.textMuted};
  `}
`
