// eslint-disable-next-line no-use-before-define
import React from 'react'
import { CurrentUriProvider } from './useCurrentUri'

export const GlobalContext: React.FC = ({ children }) => {
  return <CurrentUriProvider>{children}</CurrentUriProvider>
}
