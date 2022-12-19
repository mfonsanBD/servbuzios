import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const Thead = styled.thead`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    th {
      padding: calc(${theme.spacings.xsmall} + 0.4rem) ${theme.spacings.large};
      color: ${theme.colors.white};
      text-transform: uppercase;
    }
  `}
`

export const Tbody = styled.tbody`
  ${({ theme }) => css`
    tr:nth-child(odd) {
      background-color: ${theme.colors.gray};
    }

    td {
      padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    }
  `}
`

export const Divisor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg {
      font-size: 2rem;
      color: ${theme.colors.secondary};
    }
  `}
`
