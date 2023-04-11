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

    .tabs {
      padding: 3rem 1rem 8rem 1rem;
      background-color: ${theme.colors.white};
      border-radius: ${theme.border.radiusLarge};

      ${media.greaterThan('medium')`
        padding: 3rem 3rem 8rem 3rem;
      `}
    }

    .tabList {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;
      align-items: center;
      justify-content: center;
      border-bottom: thin solid ${theme.colors.gray};
    }

    .tab {
      outline: none;
      cursor: pointer;
      border-bottom: 3px solid ${theme.colors.white};
    }

    .react-tabs__tab--selected {
      border-bottom: 3px solid ${theme.colors.tertiary};
    }
  `}
`

export const DocsArea = styled.div`
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
    grid-template-columns: repeat(auto-fill, minmax(29rem, 1fr));
    margin-top: 0;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    margin-top: 0;
  `}
`

export const EmptyArea = styled.div`
  width: 100%;
  height: 55rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
