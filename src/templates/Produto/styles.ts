import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8rem ${theme.spacings.small};

    ${media.greaterThan('medium')`
      padding: 12rem 15rem;
    `}
  `}
`

export const FormSection = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.large};
    `}
  `}
`

export const FormArea = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
    }

    ${media.greaterThan('medium')`
      form {
        flex-direction: row;
      }
    `}
  `}
`

export const TypesArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Types = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 1rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr)) !important;
  }

  ${media.greaterThan('medium')`
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  margin-top: 0;
`}
`

export const LeftArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SelectArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.dark};
    cursor: pointer;
  `}
`

export const SizesArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Sizes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  gap: 1rem;

  @media (max-width: 321px) {
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)) !important;
  }

  ${media.greaterThan('medium')`
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  margin-top: 0;
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

export const RightArea = styled.div``

export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30rem;
    overflow: hidden;
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    z-index: 99;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      position: relative;
      width: 45rem;
      height: 45rem;
    `}
  `}
`

export const InfosArea = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.light};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const Info = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `}
`

export const PriceAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const Price = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`

export const Sifrao = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
  `}
`

export const Amount = styled.h1`
  ${({ theme }) => css`
    line-height: 0.8;
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.dark};

    ${media.greaterThan('medium')`
      font-size: calc(${theme.font.sizes.huge} + 0.8rem);
    `}
  `}
`
