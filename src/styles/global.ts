import { darken } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Thin'), url('/fonts/poppins-v20-latin-300.woff2') format('woff2')
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
    font-weight: 900;
    font-display: swap;
    src: local('Poppins Bold'), url('/fonts/poppins-v20-latin-900.woff2') format('woff2')
  }

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
      outline: none !important;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background};
    }

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${theme.colors.text};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${theme.colors.text};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${theme.colors.text};
    }

    a {
      color: ${theme.colors.tertiary};
      text-decoration: none;
      transition: 0.3s;

      &:hover {
        color: ${darken(0.1, theme.colors.tertiary)};
      }
    }
  `}
`

export default GlobalStyles
