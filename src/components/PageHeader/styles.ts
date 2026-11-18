import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  padding: 7.2rem 2.4rem 4.8rem;

  @media (max-width: 600px) {
    padding: 4.8rem 2.4rem 3.2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.8rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: clamp(3.6rem, 4vw, 5.4rem);
    line-height: 1.06;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    text-wrap: balance;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 64rem;
    font-size: 1.7rem;
    color: ${theme.colors.text};
  `}
`
