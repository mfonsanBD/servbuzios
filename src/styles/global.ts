import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before{
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      line-height: 1.6;
      color: ${theme.colors.title};
      background-color: ${theme.colors.background};
    }

    button,
    input,
    textarea {
      font-family: inherit;
    }

    ::selection {
      background: ${theme.colors.accent};
      color: ${theme.colors.secondary};
    }

    ::placeholder {
      color: ${theme.colors.textMuted};
      font-family: ${theme.font.family};
      opacity: 1;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: color ${theme.transition.fast};

      &:hover {
        color: ${theme.colors.secondary};
      }
    }

    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    textarea:focus-visible {
      outline: 0.3rem solid ${theme.colors.tertiary};
      outline-offset: 0.3rem;
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `}
`

export default GlobalStyles
