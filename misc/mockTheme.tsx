import React from 'react'

import { ThemeProvider } from 'styled-components'

import { theme } from './theme'

const MockTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default MockTheme
