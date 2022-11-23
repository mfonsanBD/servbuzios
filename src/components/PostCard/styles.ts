import styled, { css } from 'styled-components'

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.2s;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
      opacity: 0;
      transition: 0.3s;
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .card {
      width: 100%;
      height: 40rem;
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.white};
      overflow: hidden;
      border-radius: ${theme.border.radius};
      position: relative;
      cursor: pointer;

      .content {
        position: absolute;
        bottom: 3rem;
        left: 3rem;
        right: 3rem;

        h3 {
          color: ${theme.colors.white};
          margin-bottom: 1rem;
          display: flex;
        }

        small {
          display: flex;
          align-items: center;
          gap: 0.1rem;
          color: ${theme.colors.lightBrown};
          margin-bottom: 1rem;
        }
      }

      &:hover {
        ${ImageBox}:after {
          background-color: ${theme.colors.black};
          opacity: 0.8;
        }
      }
    }
  `}
`
