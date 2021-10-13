/* eslint-disable no-use-before-define */
import React from 'react'
import { useCurrentUri } from '../../hooks/useCurrentUri'

type WebViewProps = {
  openURI: string
}

export const WebView: React.FC<WebViewProps> = ({ openURI }) => {
  const { uri } = useCurrentUri()
  return <iframe src={uri} width="100%" allowFullScreen></iframe>
}
