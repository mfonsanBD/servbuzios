import styled, { css } from 'styled-components'

import { autoGrid, Container } from 'styles/shared'

// Quanto o cartão "Torne-se um associado" sobe para fora do bloco escuro.
const CTA_OVERLAP = '13rem'

export const Wrapper = styled.footer`
  padding-top: ${CTA_OVERLAP};
`

export const Dark = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 2.4rem 3.6rem;
  `}
`

export const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`

export const Cta = styled.section`
  ${({ theme }) => css`
    margin-top: -${CTA_OVERLAP};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2.8rem 4.8rem;
    padding: 4.8rem;
    background: ${theme.colors.accent};
    color: ${theme.colors.secondary};
    border-radius: 3.6rem;
    box-shadow: 0 24px 56px rgba(0, 21, 48, 0.22);

    @media (max-width: 600px) {
      padding: 3.2rem 2.4rem;
      border-radius: ${theme.border.radiusCard};
    }
  `}
`

export const CtaText = styled.div`
  ${({ theme }) => css`
    flex: 1 1 42rem;
    max-width: 64rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      font-size: clamp(2.8rem, 3vw, 4rem);
      line-height: 1.12;
      letter-spacing: -0.03em;
      font-weight: ${theme.font.semibold};
    }

    p {
      font-size: 1.6rem;
      color: #17324a;
    }
  `}
`

export const Columns = styled.div`
  ${autoGrid({ min: '21rem', gap: '4rem', fit: true })}
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
    font-size: 1.4rem;
    color: ${theme.colors.onDark};

    h3 {
      margin-bottom: 0.8rem;
      font-size: 1.4rem;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.accent};
    }

    address {
      margin-top: 0.8rem;
      font-style: normal;
    }
  `}
`

export const FooterLink = styled.a`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    min-height: 3.2rem;
    color: ${theme.colors.white};
    overflow-wrap: anywhere;

    &:hover {
      color: ${theme.colors.accent};
    }
  `}
`

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding-top: 2.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
`

export const Identity = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    img {
      flex: none;
      width: 5.6rem;
      height: 5.6rem;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      color: ${theme.colors.onDark};
    }

    strong {
      font-size: 1.4rem;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.white};
    }
  `}
`

export const Affiliations = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    color: ${theme.colors.onDark};
  `}
`

export const AffiliationLogo = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 5.6rem;
    background: ${theme.colors.white};
    border-radius: 1.4rem;
  `}
`

export const CreatedBy = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    color: ${theme.colors.onDark};

    a {
      color: ${theme.colors.white};
      font-weight: ${theme.font.semibold};

      &:hover {
        color: ${theme.colors.accent};
      }
    }
  `}
`
