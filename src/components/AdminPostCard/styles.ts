import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
    }
  `}
`

export const ImageBox = styled.span`
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    text-transform: uppercase;
  `}
`

export const ActionsButtons = styled.span`
  ${({ theme }) => css`
    width: 100%;
    border-top: thin solid ${theme.colors.inputBg};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 1rem;

    .editBtn,
    .deleteBtn {
      font-size: 1.8rem;
      cursor: pointer;
    }

    .editBtn {
      color: ${theme.colors.gray};
    }

    .deleteBtn {
      color: ${theme.colors.danger};
    }
  `}
`

export const Divider = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.inputBg};
    width: 1px;
    height: 2rem;
  `}
`

export const MessageArea = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.gray};
  `}
`

export const ButtunsArea = styled.span`
  display: flex;
  gap: 1rem;
`
