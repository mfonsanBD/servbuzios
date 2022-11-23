import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Roboto Thin'), url('/fonts/roboto-v30-latin-100.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Regular'), url('/fonts/roboto-v30-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto SemiBold'), url('/fonts/roboto-v30-latin-500.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      outline: none !important;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background};
    }

    a {
      color: ${theme.colors.lightBrown};
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: ${theme.colors.brown};
      }
    }
  `}
`

export default GlobalStyles
