import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as HeadingStyles from 'components/Heading/styles'

export const ConvenioSection = styled.section`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};

    ${HeadingStyles.Wrapper} {
      margin-bottom: 8rem;
    }

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge};
    `}
  `}
`

export const ConvenioArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 2rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    margin-top: 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    margin-top: 0;
  `}
`
