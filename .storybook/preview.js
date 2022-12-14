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
        value: theme.colors.background
      },
      {
        name: 'primary',
        value: theme.colors.primary
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
