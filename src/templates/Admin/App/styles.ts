import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    .toast-promise-messages {
      font-family: ${theme.font.family};
    }

    .Toastify__toast {
      padding: 3rem;
    }

    .Toastify__toast-container {
      width: 50rem;
    }
  `}
`

export const Wrapper = styled.main`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
`

export const Left = styled.div`
  width: 60rem;
`

export const Right = styled.div`
  ${({ theme }) => css`
    flex: 1;
    h2 {
      color: ${theme.colors.dark};
      margin-bottom: 3rem;
    }
  `}
`

export const PostsArea = styled.div`
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
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
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
