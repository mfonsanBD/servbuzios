import styled, { css } from 'styled-components'

import { autoGrid, Container, DarkBlock } from 'styles/shared'

/* ---------- peças comuns ---------- */

export const Stack = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

const richText = css`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.text};

    p + p,
    ul,
    ol {
      margin-top: 1.4rem;
    }

    ul,
    ol {
      padding-left: 2rem;
    }

    a {
      text-decoration: underline;
      text-underline-offset: 0.3rem;
    }
  `}
`

export const RichText = styled.div`
  ${richText}
`

/* ---------- hero ---------- */

export const Hero = styled.section`
  padding: 7.2rem 2.4rem 5.6rem;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 4rem 2.4rem 4rem;
  }
`

export const HeroGrid = styled(Container)`
  ${autoGrid({ min: '48rem', gap: '5.6rem', fit: true })}
  align-items: center;
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`

export const LogoTile = styled.div`
  ${({ theme }) => css`
    width: 7.6rem;
    height: 7.6rem;
    border-radius: 2.2rem;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0, 21, 48, 0.05),
      0 14px 32px rgba(0, 21, 48, 0.12);

    img {
      width: 5.8rem;
      height: 5.8rem;
    }
  `}
`

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: clamp(3.8rem, 4.4vw, 6rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.title};
    text-wrap: balance;
  `}
`

export const HeroLead = styled.p`
  ${({ theme }) => css`
    max-width: 52rem;
    font-size: 1.7rem;
    color: ${theme.colors.text};
  `}
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
`

export const Checklist = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 0.8rem;
    font-size: 1.5rem;
    color: ${theme.colors.text};

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    svg {
      flex: none;
      width: 1.8rem;
      height: 1.8rem;
      stroke-width: 2.5;
      color: ${theme.colors.primary};
    }
  `}
`

export const HeroAside = styled.div`
  position: relative;
`

export const Watermark = styled.img`
  position: absolute;
  width: 56rem;
  height: 56rem;
  max-width: none;
  right: -15rem;
  top: -9rem;
  opacity: 0.06;
  pointer-events: none;

  /* em uma coluna a marca-d'água ficaria por trás do texto do hero */
  @media (max-width: 1100px) {
    display: none;
  }
`

/* ---------- convênios (barra) ---------- */

export const Partners = styled.section`
  padding: 2.4rem 2.4rem 7.2rem;
`

export const PartnersInner = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
      font-size: 1.9rem;
      letter-spacing: -0.01em;
      font-weight: ${theme.font.semibold};
      text-align: center;
    }
  `}
`

export const PartnersBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.2rem 4.4rem;
    padding: 2.2rem 3.2rem;
    background: ${theme.colors.white};
    border-radius: 2.4rem;
    box-shadow: 0 1px 2px rgba(0, 21, 48, 0.05),
      0 10px 28px rgba(0, 21, 48, 0.06);

    > span {
      font-size: 1.7rem;
      letter-spacing: -0.01em;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.textMuted};
    }
  `}
`

/* ---------- serviços ---------- */

export const Services = styled.section`
  padding: 4rem 2.4rem 9.6rem;
`

export const ServicesCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    ${autoGrid({ min: '46rem', gap: '1.6rem', fit: true })}
    padding: 1.6rem;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radiusBlock};
    box-shadow: ${theme.shadows.cardLarge};
  `}
`

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 2rem;

  @media (max-width: 600px) {
    padding: 0.4rem 0.8rem;
  }
`

export const ServiceItem = styled.a`
  ${({ theme }) => css`
    display: flex;
    gap: 1.4rem;
    padding: 2.2rem 0;
    color: ${theme.colors.title};

    & + & {
      border-top: 1px solid ${theme.colors.line};
    }

    > svg {
      flex: none;
      width: 2rem;
      height: 2rem;
      margin-top: 0.5rem;
      color: ${theme.colors.primary};
      transition: transform ${theme.transition.fast};
    }

    &:hover {
      color: ${theme.colors.title};

      strong {
        color: ${theme.colors.primary};
      }

      > svg {
        transform: translateX(0.4rem);
      }
    }
  `}
`

export const ServiceNumber = styled.span`
  ${({ theme }) => css`
    flex: none;
    font-size: 1.7rem;
    font-weight: ${theme.font.medium};
    font-variant-numeric: tabular-nums;
    color: ${theme.colors.textMuted};
  `}
`

export const ServiceText = styled.span`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    strong {
      font-size: 1.9rem;
      line-height: 1.3;
      letter-spacing: -0.01em;
      font-weight: ${theme.font.semibold};
      transition: color ${theme.transition.fast};
    }

    span {
      font-size: 1.5rem;
      color: ${theme.colors.text};
    }
  `}
`

export const Emblem = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 42rem;
    border-radius: ${theme.border.radiusCard};
    border: 0.6rem solid ${theme.colors.primary};
    background: ${theme.colors.accent};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 600px) {
      min-height: 32rem;
    }
  `}
`

export const EmblemRing = styled.div`
  width: 30rem;
  max-width: 80%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 1px solid rgba(13, 68, 99, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EmblemSeal = styled.div`
  ${({ theme }) => css`
    width: 70%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 40px rgba(0, 21, 48, 0.18);

    img {
      width: 80%;
      height: auto;
    }
  `}
`

export const EmblemIcon = styled.span`
  ${({ theme }) => css`
    position: absolute;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    background: rgba(13, 68, 99, 0.14);
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    @media (max-width: 600px) {
      width: 4.4rem;
      height: 4.4rem;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  `}
`

/* ---------- por que se associar ---------- */

export const Why = styled.section`
  ${({ theme }) => css`
    padding: 9.6rem 2.4rem 10.4rem;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    @media (max-width: 600px) {
      padding: 6.4rem 2.4rem;
    }
  `}
`

export const WhyInner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const WhyTop = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2.4rem;

    h2 {
      font-size: clamp(3.2rem, 3.6vw, 4.8rem);
      line-height: 1.1;
      letter-spacing: -0.03em;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.accent};
    }

    p {
      max-width: 46rem;
      font-size: 1.6rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const Reasons = styled.div`
  ${autoGrid({ min: '30rem', gap: '1.6rem', fit: true })}
`

export const Reason = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`

export const ReasonArt = styled.div`
  ${({ theme }) => css`
    height: 18rem;
    background: rgba(0, 21, 48, 0.32);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 7.6rem;
      height: 7.6rem;
      border-radius: 50%;
      background: ${theme.colors.accent};
      color: ${theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`

export const ReasonBody = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2.4rem;

    h3 {
      font-size: 2rem;
      letter-spacing: -0.01em;
      font-weight: ${theme.font.semibold};
    }

    p {
      font-size: 1.5rem;
      color: ${theme.colors.onDark};
    }
  `}
`

/* ---------- notícias ---------- */

export const News = styled.section`
  padding: 9.6rem 2.4rem 4rem;

  @media (max-width: 600px) {
    padding: 6.4rem 2.4rem 2.4rem;
  }
`

export const NewsGrid = styled.div`
  width: 100%;
  ${autoGrid({ min: '32rem', gap: '2rem' })}
`

/* ---------- fala, presidente ---------- */

export const President = styled.section`
  padding: 7.2rem 2.4rem 4rem;

  @media (max-width: 600px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`

export const PresidentBlock = styled(DarkBlock)`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    ${autoGrid({ min: '38rem', gap: '4rem', fit: true })}
  `}
`

export const PresidentIntro = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    h2 {
      font-size: clamp(3rem, 3.2vw, 4.4rem);
      line-height: 1.12;
      letter-spacing: -0.03em;
      font-weight: ${theme.font.semibold};
    }
  `}
`

export const Quote = styled.p`
  ${({ theme }) => css`
    font-size: clamp(2.6rem, 2.6vw, 3.6rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.accent};
    text-wrap: balance;
  `}
`

export const Person = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-top: 1.2rem;

    div:last-child {
      display: flex;
      flex-direction: column;
    }

    strong {
      font-size: 1.7rem;
      font-weight: ${theme.font.semibold};
    }

    span {
      font-size: 1.4rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const PersonPhoto = styled.div`
  position: relative;
  flex: none;
  width: 12rem;
  height: 12rem;
  border-radius: 3rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.14);
`

export const PresidentText = styled.div`
  ${({ theme }) => css`
    padding: 3.2rem;
    background: ${theme.colors.white};
    border-radius: 2.4rem;
    color: ${theme.colors.textStrong};
    font-size: 1.5rem;
    line-height: 1.65;

    p + p {
      margin-top: 1.4rem;
    }

    @media (max-width: 600px) {
      padding: 2.4rem 2rem;
    }
  `}
`

/* ---------- vídeo ---------- */

export const Video = styled.section`
  padding: 7.2rem 2.4rem 4rem;

  @media (max-width: 600px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`

/* ---------- o sindicato ---------- */

export const About = styled.section`
  padding: 7.2rem 2.4rem 9.6rem;

  @media (max-width: 600px) {
    padding: 4.8rem 2.4rem 6.4rem;
  }
`

export const AboutGrid = styled(Container)`
  ${autoGrid({ min: '46rem', gap: '5.6rem', fit: true })}
  align-items: center;
`

export const AboutPhoto = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: ${theme.border.radiusBlock};
    overflow: hidden;
    background: ${theme.colors.surfaceMuted};
    box-shadow: 0 24px 56px rgba(0, 21, 48, 0.14);
  `}
`

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.8rem;

    h2 {
      font-size: clamp(3rem, 3.2vw, 4.4rem);
      line-height: 1.12;
      letter-spacing: -0.03em;
      font-weight: ${theme.font.semibold};
      text-wrap: balance;
    }
  `}
`
