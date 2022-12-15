import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radiusLarge};
    position: relative;
    margin: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      width: 30%;
      padding: 5rem 3rem;
      margin: 0;
    `}

    h1 {
      position: absolute;
      font-size: 15rem;
      z-index: 1;
      color: rgba(0, 0, 0, 0.05);

      @media (max-width: 321px) {
        font-size: 12rem;
      }

      ${media.greaterThan('medium')`
        font-size: 19rem;
      `}
    }

    h3 {
      color: ${theme.colors.title};
      font-size: 2.8rem;
      z-index: 2;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    p {
      color: ${theme.colors.gray};
      z-index: 2;
      margin-bottom: 1rem;
      text-align: center;
    }

    ${ButtonStyles.Wrapper} {
      z-index: 2;
    }
  `}
`
