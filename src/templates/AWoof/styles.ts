import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const AboutSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 5rem;

    ${media.greaterThan('medium')`
      padding: 12rem 15rem;
      flex-direction: row;

      ${HeadingStyles.Wrapper} {
        margin-bottom: 3rem;
      }
    `}
  `}
`

export const AboutLeft = styled.div`
  width: 100%;

  ${media.greaterThan('medium')`
    width: 80%;
  `}
`

export const AboutText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
  `}
`

export const AboutRight = styled.div`
  ${({ theme }) => css`
    width: 90%;
    min-height: 38.8rem;
    position: relative;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`
