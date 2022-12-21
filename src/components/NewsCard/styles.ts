import styled, { css } from 'styled-components'

export const ImageAndBadge = styled.div`
  display: flex;
  position: relative;
`

export const Cover = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 28rem;
    border-radius: ${theme.border.radiusLarge};
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.title};
    font-weight: ${theme.font.semibold};
    line-height: 1.15;
    margin-bottom: ${theme.spacings.xxsmall};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  `}
`

export const CreatedAt = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radiusLarge};
    padding: calc(${theme.spacings.small} - 0.4rem);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

    &:hover {
      ${Cover} img {
        transform: scale(1.1);
      }
    }
  `}
`
