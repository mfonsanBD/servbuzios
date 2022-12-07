import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

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

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    margin-bottom: 3rem;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

type LabelProps = {
  error?: boolean
}

export const Label = styled.label<LabelProps>`
  ${({ theme, error }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${error ? theme.colors.danger : theme.colors.dark};
    cursor: pointer;

    span {
      color: ${theme.colors.danger};
    }
  `}
`

export const ErrorMessage = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `}
`

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

export const ImagePreview = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40rem;
    border-radius: ${theme.border.radius};
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const DeletePreview = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    cursor: pointer;
    transition: 0.3s;

    svg {
      color: ${theme.colors.danger};
      transition: 0.3s;
    }

    &:hover {
      background-color: ${theme.colors.danger};

      svg {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const InputFileArea = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 7rem;
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.inputBg};
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }

    p {
      position: absolute;
      z-index: 1;
      text-align: center;
    }
  `}
`
