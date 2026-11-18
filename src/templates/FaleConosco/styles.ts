import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

export const Section = styled.section`
  padding: 1.6rem 2.4rem 4.8rem;
`

export const Grid = styled(Container)`
  ${autoGrid({ min: '46rem', gap: '2.4rem', fit: true })}
  align-items: start;
`

export const Dark = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-width: 0;
    padding: 3.6rem;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radiusBlock};
    color: ${theme.colors.white};

    @media (max-width: 600px) {
      padding: 2.8rem 2.4rem;
    }
  `}
`

export const DarkTitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 0.8rem;
    font-size: 2.6rem;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.accent};
  `}
`

export const Channel = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  padding: 1.8rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`

export const IconCircle = styled.span`
  ${({ theme }) => css`
    flex: none;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2rem;
      height: 2rem;
    }
  `}
`

export const ChannelBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    min-width: 0;

    > span:first-child {
      font-size: 1.3rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const Value = styled.span`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.white};
    overflow-wrap: anywhere;
  `}
`

export const ChannelLink = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    min-height: 4.4rem;
    font-size: 1.6rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.white};
    text-decoration: none;
    overflow-wrap: anywhere;
    transition: color ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const Pill = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    min-height: 4.4rem;
    padding: 0 1.6rem;
    border-radius: ${theme.border.radiusPill};
    background: rgba(255, 255, 255, 0.12);
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: ${theme.font.semibold};
    text-decoration: none;
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    &:hover {
      background: rgba(255, 255, 255, 0.22);
      color: ${theme.colors.accent};
    }
  `}
`

export const MapSection = styled.section`
  padding: 0 2.4rem 9.6rem;
`

export const MapFrame = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 40rem;
    border-radius: ${theme.border.radiusBlock};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
    box-shadow: ${theme.shadows.card};

    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `}
`

export const MapAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;
`
