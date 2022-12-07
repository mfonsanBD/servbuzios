import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.black};
    padding: 3rem ${theme.spacings.small};
    position: relative;

    ${media.greaterThan('medium')`
      padding: 5rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const Main = styled.main`
  margin-top: 12rem;
`
