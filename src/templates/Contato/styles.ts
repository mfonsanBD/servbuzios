import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    ${media.greaterThan('medium')`
      padding: 8rem 20rem;
      flex-direction: row;
    `}
  `}
`

export const ContactArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20vh;
    background-color: ${theme.colors.lightBrown};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      width: 70%;
      height: 25vh;
      padding: ${theme.spacings.xxlarge};
      flex-direction: row;
      align-items: center;
      gap: 8rem;
    `}
  `}
`

export const ContactBox = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.3s;

    &:hover {
      color: ${theme.colors.white};
    }

    ${media.greaterThan('medium')`
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `}
  `}
`
