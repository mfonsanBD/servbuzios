import styled, { css } from 'styled-components'

import { autoGrid } from 'styles/shared'

export const Top = styled.header`
  padding: 5.6rem 2.4rem 3.2rem;

  @media (max-width: 600px) {
    padding: 3.2rem 2.4rem 2.4rem;
  }
`

export const TopInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
  width: 100%;
  max-width: 82rem;
  margin: 0 auto;
`

export const PostedOn = styled.time`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.textMuted};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: clamp(3.6rem, 4vw, 5.4rem);
    line-height: 1.06;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    text-wrap: balance;
    overflow-wrap: anywhere;
  `}
`

export const Lead = styled.p`
  ${({ theme }) => css`
    font-size: 1.9rem;
    line-height: 1.55;
    color: ${theme.colors.text};
  `}
`

export const Narrow = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
`

export const CoverSection = styled.section`
  padding: 0 2.4rem 4rem;
`

export const Cover = styled.img`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 2.8rem;
    background: ${theme.colors.surfaceMuted};
    box-shadow: 0 24px 56px rgba(0, 21, 48, 0.14);

    @media (max-width: 600px) {
      border-radius: ${theme.border.radiusCard};
    }
  `}
`

export const Body = styled.section`
  padding: 0 2.4rem 4.8rem;
`

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    line-height: 1.7;
    color: ${theme.colors.textStrong};
    overflow-wrap: anywhere;

    > * + *,
    p + p,
    ul,
    ol,
    h2,
    h3 {
      margin-top: 2rem;
    }

    ul,
    ol {
      padding-left: 2.4rem;
    }

    ul {
      list-style: disc;
    }

    ol {
      list-style: decimal;
    }

    h2,
    h3 {
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.title};
      line-height: 1.2;
    }

    h2 {
      font-size: 2.8rem;
    }

    h3 {
      font-size: 2.2rem;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: underline;
      text-underline-offset: 0.3rem;
    }

    strong {
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.title};
    }

    blockquote {
      margin: 3.2rem 0;
      padding: 3.2rem;
      border-radius: ${theme.border.radiusCard};
      background: ${theme.colors.accent};
      color: ${theme.colors.secondary};
      font-size: clamp(2.2rem, 2.2vw, 2.8rem);
      line-height: 1.3;
      font-weight: ${theme.font.semibold};
    }

    img,
    iframe {
      max-width: 100%;
      height: auto;
      border-radius: ${theme.border.radiusInner};
    }
  `}
`

export const Share = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: 3.2rem;
    padding-top: 2.4rem;
    border-top: 1px solid ${theme.colors.line};
  `}
`

export const ShareLabel = styled.span`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const Related = styled.section`
  padding: 2.4rem 2.4rem 9.6rem;

  @media (max-width: 600px) {
    padding-bottom: 7.2rem;
  }
`

export const RelatedGrid = styled.div`
  ${autoGrid({ min: '32rem', gap: '2rem' })}
  margin-top: 3.2rem;
`
