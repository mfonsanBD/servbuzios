import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small} 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge} 12rem;
    `}
  `}
`

export const Cover = styled.div`
  width: 100%;
  height: 35rem;
  overflow: hidden;
  position: relative;

  ${media.greaterThan('medium')`
    width: 40%;
    height: 50rem;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    color: ${theme.colors.title};
    font-weight: ${theme.font.bold};
    text-align: center;
    line-height: 1;
    position: relative;
    word-wrap: break-word;
    font-size: ${theme.font.sizes.xxxlarge};

    ${media.greaterThan('medium')`
      width: 70%;
      word-wrap: normal;
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const PostedOn = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    text-align: center;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radiusLarge};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

    img {
      margin-top: 3rem;
      max-height: 400px;
      width: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      width: 70%;
      padding: ${theme.spacings.large};

      img {
        margin-top: 5rem;
        max-height: 1200px;
      }
    `}

    ${media.greaterThan('huge')`
      img {
        margin-top: 5rem;
        max-height: 1700px;
      }
    `}
  `}
`
