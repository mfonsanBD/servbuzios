import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small} 0;

    ${media.greaterThan('medium')`
      padding: 12rem ${theme.spacings.xxlarge} 0;
    `}
  `}
`

export const CardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 3rem;
  margin: 8rem 0;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr)) !important;
  }

  ${media.lessThan('small')`
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    margin: 12rem 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(42rem, 1fr));
  `}
`
