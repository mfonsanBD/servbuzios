import styled, { css } from 'styled-components'

export const Username = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.light};
    }
  `}
`

export const ImageBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.dark};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    svg {
      color: ${theme.colors.brown};
      transition: background, color, ${theme.transition.default};
    }

    &:hover {
      background: ${theme.colors.lightBrown};
      color: ${theme.colors.white};

      svg {
        color: ${theme.colors.white};
      }
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
