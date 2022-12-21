import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small} 8rem;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge} 12rem;
    `}

    ${HeadingStyles.Wrapper} {
      margin: 8rem 0;

      ${media.greaterThan('medium')`
        margin: 12rem 0 8rem;
      `}
    }
  `}
`

export const DocsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    margin-top: 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(43rem, 1fr));
    margin-top: 0;
  `}
`
