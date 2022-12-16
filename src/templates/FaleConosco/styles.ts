import media from 'styled-media-query'
import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.xxlarge};
    `}

    ${HeadingStyles.Wrapper} {
      margin: 8rem 0;

      ${media.greaterThan('medium')`
        margin: 12rem 0 8rem;
      `}
    }
  `}
`

export const MapBox = styled.div`
  width: 100%;
  margin-top: 8rem;
  position: relative;

  ${media.greaterThan('medium')`
    margin-top: 20rem;
  `}

  iframe {
    width: 100%;
    height: 60rem;

    ${media.greaterThan('medium')`
      height: 60rem;
    `}
  }
`

export const InfoBox = styled.div`
  width: 92%;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  ${media.greaterThan('medium')`
    width: 100%;
    flex-direction: row;
    gap: 3.2rem;
    position: absolute;
    top: -8rem;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 22rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 5rem;
    border-radius: ${theme.border.radiusLarge};
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);

    ${media.greaterThan('medium')`
      padding: 5rem;
      width: 34rem;
      height: 25rem;
    `}

    svg {
      font-size: 4rem;
      color: ${theme.colors.primary};
    }

    p {
      color: ${theme.colors.text};
      text-align: center;
    }
  `}
`
