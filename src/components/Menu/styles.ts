import { darken } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: 2rem ${theme.spacings.small};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    z-index: ${isOpen ? theme.layers.menu : `calc(${theme.layers.menu} - 1)`};

    ${media.greaterThan('medium')`
      padding: 1rem ${theme.spacings.large};
      flex-direction: row;
      align-items: center;
    `}

    ${media.greaterThan('huge')`
      padding: 3rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: relative;
    cursor: pointer;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: ${theme.layers.menu} + 1;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};
		`}

    ${media.greaterThan('huge')`
      gap: calc(${theme.spacings.small} * 2);
		`}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.text};
    font-size: 15px;
    text-decoration: none;
    text-align: center;

    &.active {
      color: ${theme.colors.tertiary};

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.tertiary};
        animation: hoverAnimation 0.2s forwards;
      }

      &:hover {
        color: ${darken(0.1, theme.colors.tertiary)};

        &::after {
          background-color: ${darken(0.1, theme.colors.tertiary)};
        }
      }
    }

    &:hover {
      color: ${darken(0.1, theme.colors.text)};

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${darken(0.1, theme.colors.text)};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(18, 18, 20, 0.95);
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 3.2rem;
      height: 3.2rem;
      color: ${theme.colors.white};
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const SocialMedias = styled.div`
  a {
    margin: 0 0.5rem;
  }
`
