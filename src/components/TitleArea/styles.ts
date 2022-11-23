import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
  background-image: url('/img/title-hero-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;

  &::after {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
  }

  ${media.greaterThan('medium')`
    height: 35rem;
    padding-bottom: 10rem;
  `}
`

export const Content = styled.div`
  position: absolute;
  text-align: center;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.lightBrown};
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
  `}
`

export const NavArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Divider = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const NavTitle = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.lightBrown};
  `}
`
