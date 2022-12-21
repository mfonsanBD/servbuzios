import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 40rem;
  height: 55rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
  `}
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: ${theme.border.radiusLarge};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`
