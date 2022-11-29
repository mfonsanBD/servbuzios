import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.light};
    padding: 3rem ${theme.spacings.small};
    position: relative;

    ${media.greaterThan('medium')`
      padding: 1rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const Main = styled.main`
  margin-top: 12rem;
`
