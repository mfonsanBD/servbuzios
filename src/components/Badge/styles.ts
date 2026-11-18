import styled, { css } from 'styled-components'

type WrapperProps = {
  $inverted: boolean
}

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, $inverted }) => css`
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 1.4rem 0.6rem 0.6rem;
    border-radius: ${theme.border.radiusPill};
    font-size: 1.3rem;
    line-height: 1.4;
    font-weight: ${theme.font.semibold};
    background: ${$inverted ? 'rgba(255, 255, 255, 0.12)' : theme.colors.white};
    color: ${$inverted ? theme.colors.white : theme.colors.title};
    box-shadow: ${$inverted
      ? 'none'
      : '0 1px 2px rgba(0, 21, 48, 0.05), 0 8px 20px rgba(0, 21, 48, 0.06)'};
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    flex: none;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  `}
`
