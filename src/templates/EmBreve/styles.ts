import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const LeftArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.xxlarge};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.greaterThan('medium')`
      width: 70%;
      padding: calc(${theme.spacings.xxlarge} + 3rem);
      align-items: flex-start;
      justify-content: space-between;
    `}
  `}
`

export const LogoArea = styled.div`
  position: relative;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xxlarge} + 2rem);
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    text-align: center;

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    text-align: center;

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`

export const Copy = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-align: center;
    margin-top: 1rem;

    ${media.greaterThan('medium')`
      text-align: left;
      margin-top: 0;
    `}
  `}
`

export const RightArea = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  `}
`
