import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 55rem;
  overflow: hidden;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    margin-bottom: 1rem;
  `}
`

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
