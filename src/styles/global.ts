import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Poppins Thin'), url('/fonts/poppins-v20-latin-100.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), url('/fonts/poppins-v20-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), url('/fonts/poppins-v20-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), url('/fonts/poppins-v20-latin-600.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Poppins ExtraBold'), url('/fonts/poppins-v20-latin-800.woff2') format('woff2')
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
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.black};
    }

    a {
      color: ${theme.colors.brown};
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: ${theme.colors.lightBrown};
      }
    }
  `}
`

export default GlobalStyles
