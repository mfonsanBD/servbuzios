import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem;
`

export const Initials = styled.div`
  ${({ theme }) => css`
    flex: none;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 2rem;
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: ${theme.font.semibold};
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20rem;
  min-width: 0;
`

export const Nome = styled.span`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
  `}
`

export const Oab = styled.span`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.textMuted};
  `}
`

export const Phone = styled.span`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${theme.colors.text};
    font-variant-numeric: tabular-nums;
  `}
`
