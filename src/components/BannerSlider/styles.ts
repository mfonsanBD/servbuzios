import styled, { css } from 'styled-components'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${BannerStyles.Wrapper} {
      margin: 0 auto;
    }

    .slick-prev,
    .slick-next {
      display: flex;
      width: 4rem;
      height: 5rem;
      border: none;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;

      svg {
        font-size: 5rem;
      }
    }

    .slick-prev {
      align-items: flex-start;
      left: calc(${theme.spacings.xxlarge} + 5rem);
    }

    .slick-next {
      align-items: flex-end;
      right: calc(${theme.spacings.xxlarge} + 5rem);
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
