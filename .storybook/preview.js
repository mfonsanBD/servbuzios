import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.light
      },
      {
        name: 'dark',
        value: theme.colors.dark
      },
      {
        name: 'white',
        value: theme.colors.white
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
