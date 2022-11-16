import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.dark};
    cursor: pointer;
  `}
`

export const NoOptions = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
`

export const Message = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
  `}
`
