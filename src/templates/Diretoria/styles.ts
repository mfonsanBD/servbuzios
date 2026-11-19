import styled, { css } from 'styled-components'

import { autoGrid, Container, DarkBlock } from 'styles/shared'

type SectionProps = {
  $last?: boolean
}

export const Section = styled.section<SectionProps>`
  padding: 2.4rem 2.4rem 7.2rem;

  ${({ $last }) =>
    $last &&
    css`
      padding-bottom: 9.6rem;
    `}

  @media (max-width: 600px) {
    padding: 1.6rem 2.4rem 4.8rem;
  }
`

export const Stack = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const CardsGrid = styled.div`
  ${autoGrid({ min: '26rem', gap: '2rem' })}
`

export const Council = styled(DarkBlock)`
  ${autoGrid({ min: '34rem', gap: '4rem', fit: true })}
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  align-items: center;
`

export const CouncilIntro = styled.div`
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
      color: ${theme.colors.accent};
    }

    p {
      max-width: 46rem;
      font-size: 1.6rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const CouncilList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Member = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 1.8rem 2rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.07);
    border: 0.1rem solid rgba(255, 255, 255, 0.1);

    h3 {
      font-size: 1.7rem;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.white};
    }

    span {
      font-size: 1.4rem;
      color: ${theme.colors.onDark};
    }
  `}
`

export const MemberAvatar = styled.span`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: ${theme.border.radiusPill};
    background: ${theme.colors.accent};
    font-size: 1.5rem;
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.secondary};
  `}
`

export const CouncilEmpty = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.onDark};
  `}
`

export const DocsGrid = styled.div`
  ${autoGrid({ min: '32rem', gap: '1.6rem', fit: true })}
`

export const DocLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2rem 2.2rem;
    background: ${theme.colors.white};
    border-radius: 2.2rem;
    color: ${theme.colors.title};
    box-shadow: ${theme.shadows.card};
    transition: box-shadow ${theme.transition.default},
      transform ${theme.transition.default};

    > svg {
      flex: none;
      margin-left: auto;
      font-size: 2rem;
      color: ${theme.colors.primary};
      transition: transform ${theme.transition.fast};
    }

    &:hover {
      box-shadow: ${theme.shadows.float};
      transform: translateY(-0.2rem);

      > svg {
        transform: translateX(0.3rem);
      }
    }
  `}
`

export const DocIcon = styled.span`
  ${({ theme }) => css`
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1.4rem;
    background: ${theme.colors.accentSoft};
    color: ${theme.colors.primary};
    font-size: 2.2rem;
  `}
`

export const DocText = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.6rem;
      font-weight: ${theme.font.semibold};
    }

    span {
      font-size: 1.3rem;
      color: ${theme.colors.textMuted};
    }
  `}
`
