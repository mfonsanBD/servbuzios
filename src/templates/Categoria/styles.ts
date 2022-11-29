import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    margin: 8rem 0;
    height: 265rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge};
      margin: 12rem 0;
      height: 95rem;
    `}
  `}
`

export const Posts = styled.div`
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
      border-radius: ${theme.border.radius};
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 4rem;
      min-height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      cursor: pointer;
      color: ${theme.colors.dark};
      background-color: ${theme.colors.white};
      transition: 0.3s;

      &:hover,
      &:active,
      &:focus {
        background-color: ${theme.colors.lightBrown};
      }
    }

    .custom-item--active {
      background-color: ${theme.colors.lightBrown};
      border-radius: ${theme.border.radius};
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
