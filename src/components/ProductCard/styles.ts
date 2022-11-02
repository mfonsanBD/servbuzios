import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.border.radius};
    overflow: hidden;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

export const ImageArea = styled.div`
  width: 100%;
  height: 21.3rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
  `}
`

export const Description = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`
