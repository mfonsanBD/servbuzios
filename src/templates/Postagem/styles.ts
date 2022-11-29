import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 3rem auto;
    width: 35rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
      width: 90rem;
      margin: 8rem auto;
    `}
  `}
`

export const CoverBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 25rem;
    overflow: hidden;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      height: 50.8rem;
    `}
  `}
`

export const PostData = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    gap: 0.1rem;
    color: ${theme.colors.gray};
    margin-bottom: 1rem;

    a {
      color: ${theme.colors.gray};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    padding: 0 3rem 3rem;

    ${media.greaterThan('medium')`
      padding: 0 6.5rem 6.5rem;
    `}

    p, ul, li {
      margin-bottom: 3rem !important;
    }

    ul {
      list-style: none;
    }

    ul li img {
      width: 2rem !important;
      height: 2rem !important;
    }

    .elementor-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      h2 {
        color: ${theme.colors.dark};
      }

      img {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  `}
`
