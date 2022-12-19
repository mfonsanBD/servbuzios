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

export const PostsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
`

export const Posts = styled.div`
  width: 100%;
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
`

export const PaginationArea = styled.div`
  ${({ theme }) => css`
    .custom-item {
      border-radius: ${theme.border.radiusNormal};
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 4rem;
      min-height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      cursor: pointer;
      color: ${theme.colors.title};
      background-color: ${theme.colors.white};
      transition: 0.3s;

      &:hover,
      &:active,
      &:focus {
        background-color: ${theme.colors.tertiary};
        color: ${theme.colors.white};
      }
    }
    .custom-item--active {
      background-color: ${theme.colors.tertiary};
      border-radius: ${theme.border.radiusNormal};
      color: ${theme.colors.white};
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 4rem;
      min-height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    .custom-item--disable {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .custom-root ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: center;
    }
  `}
`
