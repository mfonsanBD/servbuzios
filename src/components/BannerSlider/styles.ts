import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: white;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.lightBrown};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper}{
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;
        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }

      .slick-prev,
      .slick-next {
        display: block;
        width: 5rem;
        height: 5rem;
        padding: 1.5rem;
        border: none;
        background-color: ${theme.colors.white};
        color: ${theme.colors.lightBrown};
        cursor: pointer;
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }

      .slick-prev {
        margin-left: -2.5rem;
        border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      }

      .slick-next {
        margin-left: 2.5rem;
        border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
        border-left: thin solid rgba(0, 0, 0, 0.1);
      }

      .slick-prev.slick-disabled,
      .slick-next.slick-disabled {
        visibility: hidden;
      }
    `}
  `}
`
