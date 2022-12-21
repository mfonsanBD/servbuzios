import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge};
    `}

    ${HeadingStyles.Wrapper} {
      margin: 8rem 0;

      ${media.greaterThan('medium')`
        margin: 12rem 0 8rem;
      `}
    }
  `}
`

export const AdvogadoSection = styled.section`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small} 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};
    margin-top: 8rem;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge} 12rem;
      flex-direction: row;
      margin-top: 12rem;
    `}

    ${media.greaterThan('huge')`
      padding: 0 25rem 12rem;
    `}
  `}
`

export const Processo = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding: 12rem 0;
    margin-top: 12rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
