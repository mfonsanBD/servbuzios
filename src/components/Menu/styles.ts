import styled, { css } from 'styled-components'

import { Container } from 'styles/shared'

// A navegação em pílula só cabe a partir desta largura; abaixo dela vira menu móvel.
const DESKTOP = '1100px'

export const Wrapper = styled.header`
  padding: 2rem 2.4rem 0;
`

export const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem 2rem;
`

export const Brand = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    min-height: 4.8rem;
    color: ${theme.colors.title};

    img {
      width: 4.6rem;
      height: 4.6rem;
    }

    span {
      font-size: 2rem;
      font-weight: ${theme.font.bold};
      letter-spacing: -0.02em;

      /* em telas estreitas fica só o brasão: o link mantém o nome no aria-label */
      @media (max-width: 420px) {
        display: none;
      }
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const DesktopNav = styled.nav`
  ${({ theme }) => css`
    display: none;
    gap: 0.2rem;
    padding: 0.6rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusPill};
    box-shadow: ${theme.shadows.pill};

    @media (min-width: ${DESKTOP}) {
      display: flex;
    }
  `}
`

export const NavLink = styled.a`
  ${({ theme }) => css`
    padding: 1.2rem 1.6rem;
    border-radius: ${theme.border.radiusPill};
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: ${theme.font.medium};
    white-space: nowrap;
    color: ${theme.colors.title};
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    &:hover {
      background: ${theme.colors.background};
      color: ${theme.colors.primary};
    }

    &[aria-current='page'] {
      background: ${theme.colors.accentSoft};
      color: ${theme.colors.primary};
      font-weight: ${theme.font.semibold};
    }
  `}
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  a {
    white-space: nowrap;
  }
`

export const DesktopOnly = styled.div`
  display: none;

  @media (min-width: ${DESKTOP}) {
    display: block;
  }
`

export const Toggle = styled.button`
  ${({ theme }) => css`
    flex: none;
    width: 4.8rem;
    height: 4.8rem;
    border: 0;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.white};
    color: ${theme.colors.title};
    box-shadow: ${theme.shadows.pill};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    @media (min-width: ${DESKTOP}) {
      display: none;
    }
  `}
`

type MobileMenuProps = {
  $isOpen: boolean
}

export const MobileMenu = styled.nav<MobileMenuProps>`
  ${({ theme, $isOpen }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layers.menu};
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2rem 2.4rem 3.2rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    overflow-y: auto;
    opacity: ${$isOpen ? 1 : 0};
    visibility: ${$isOpen ? 'visible' : 'hidden'};
    pointer-events: ${$isOpen ? 'all' : 'none'};
    transition: opacity ${theme.transition.default},
      visibility ${theme.transition.default};

    @media (min-width: ${DESKTOP}) {
      display: none;
    }
  `}
`

export const MobileTop = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4.8rem;
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.accent};
  `}
`

export const Close = styled.button`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    border: 0;
    border-radius: ${theme.border.radiusPill};
    background: rgba(255, 255, 255, 0.12);
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  `}
`

export const MobileLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MobileLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-height: 5.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    font-size: 2.2rem;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.accent};
    }

    &[aria-current='page'] {
      color: ${theme.colors.accent};
    }
  `}
`

export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
