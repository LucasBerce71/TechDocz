// eslint-disable-next-line no-use-before-define
import React from 'react'

import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'

import theme from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { WebView } from './components/WebView'
import { GlobalContext } from './hooks'
import { useCurrentUri } from './hooks/useCurrentUri'

export const App: React.FC = () => {
  const { uri } = useCurrentUri()
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <Header />
        <WebView openURI={uri} />
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext>
  )
}
