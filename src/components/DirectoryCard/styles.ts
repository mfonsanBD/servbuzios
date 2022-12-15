import styled, { css } from 'styled-components'
import { DirectoryCardProps } from '.'

type WrapperProps = Pick<DirectoryCardProps, 'photo'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, photo }) => css`
    width: 100%;
    height: 28rem;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: ${theme.spacings.large};
    border-radius: ${theme.border.radiusLarge};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radiusLarge};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    line-height: 1;
  `}
`

export const Role = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    line-height: 1;
  `}
`
