import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 98rem;
    aspect-ratio: 16 / 9;
    border-radius: ${theme.border.radiusBlock};
    overflow: hidden;
    background: ${theme.colors.primary};
    box-shadow: 0 24px 56px rgba(0, 21, 48, 0.18);

    @media (max-width: 600px) {
      border-radius: ${theme.border.radiusInner};
    }

    .video {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `}
`
