import styled, { css } from 'styled-components'

type WrapperProps = {
  $align: 'left' | 'center'
}

type ToneProps = {
  $inverted: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ $align }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${$align === 'center' ? 'center' : 'flex-start'};
    text-align: ${$align};
    gap: 1.8rem;
  `}
`

export const Title = styled.h2<ToneProps>`
  ${({ theme, $inverted }) => css`
    font-size: clamp(2.8rem, 3.2vw, 4.4rem);
    line-height: 1.12;
    letter-spacing: -0.03em;
    font-weight: ${theme.font.semibold};
    color: ${$inverted ? theme.colors.accent : theme.colors.title};
    text-wrap: balance;
  `}
`

export const Subtitle = styled.p<ToneProps>`
  ${({ theme, $inverted }) => css`
    max-width: 64rem;
    font-size: 1.6rem;
    color: ${$inverted ? theme.colors.onDark : theme.colors.text};
  `}
`
