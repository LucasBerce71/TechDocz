// eslint-disable-next-line no-use-before-define
import React, { createContext, useCallback, useContext, useState } from 'react'
import { techsIconPath, techsURI } from '../Config/appConfig'

interface ICurrentUriContextData {
  tech: string
  uri: string
  techIcon: string
  handleChangeCurrentUri: () => void
  handleChangeCurrentTech: (tech: string) => void
  handleChangeCurrentTechIcon: (path: string) => void
}

const CurrentUriContext = createContext<ICurrentUriContextData>(
  {} as ICurrentUriContextData
)

const CurrentUriProvider: React.FC = ({ children }) => {
  const [tech, setTech] = useState<string>('')
  const [uri, setUri] = useState<string>('')
  const [techIcon, setTechIcon] = useState<string>('')

  const handleChangeCurrentTech = useCallback((tech: string) => {
    setTech(tech.toUpperCase())
  }, [])

  const handleChangeCurrentTechIcon = useCallback((path: string) => {
    setTechIcon('')
  }, [])

  const handleChangeCurrentUri = () => {
    if (
      tech === 'REACT NAVIGATION' ||
      tech === 'REACT-NAVIGATION' ||
      tech === 'REACT_NAVIGATION' ||
      tech === 'REACTNAVIGATION'
    ) {
      setUri(techsURI.ReactNavigation)
      setTechIcon(techsIconPath.ReactNavigation)
    }

    if (tech === 'REPOSITORY') {
      setUri(techsURI.ReactNavigation)
    }

    if (tech === 'TYPESCRIPT') {
      setUri(techsURI.Typescript)
      setTechIcon(techsIconPath.Typescript)
    }

    if (
      tech === 'REACT JS' ||
      tech === 'REACT-JS' ||
      tech === 'REACT_JS' ||
      tech === 'REACTJS' ||
      tech === 'REACT'
    ) {
      setUri(techsURI.ReactJS)
      setTechIcon(techsIconPath.React)
    }

    if (
      tech === 'REACT NATIVE' ||
      tech === 'REACT-NATIVE' ||
      tech === 'REACT_NATIVE' ||
      tech === 'REACTNATIVE'
    ) {
      setUri(techsURI.ReactNative)
      setTechIcon(techsIconPath.React)
    }

    if (tech === 'ANGULAR') {
      setUri(techsURI.Angular)
      setTechIcon(techsIconPath.Angular)
    }

    if (
      tech === 'VUE' ||
      tech === 'VUE JS' ||
      tech === 'VUE_JS' ||
      tech === 'VUE-JS' ||
      tech === 'VUEJS'
    ) {
      setUri(techsURI.VueJS)
      setTechIcon(techsIconPath.VueJS)
    }

    if (tech === 'CORDOVA') {
      setUri(techsURI.Cordova)
      setTechIcon(techsIconPath.Cordova)
    }

    if (tech === 'JAVA') {
      setUri(techsURI.Java)
      setTechIcon(techsIconPath.Java)
    }

    if (tech === 'CSS') {
      setUri(techsURI.Css)
      setTechIcon(techsIconPath.Css)
    }

    if (
      tech === 'HTML' ||
      tech === 'HTML 5' ||
      tech === 'HTML5' ||
      tech === 'HTML_5' ||
      tech === 'HTML-5'
    ) {
      setUri(techsURI.Html)
      setTechIcon(techsIconPath.Html)
    }

    if (tech === 'HTTP' || tech === 'HTTPS') {
      setUri(techsURI.Http)
      setTechIcon(techsIconPath.Http)
    }

    if (
      tech === 'CPP' ||
      tech === 'C++' ||
      tech === 'C ++' ||
      tech === 'C + +' ||
      tech === 'C PP' ||
      tech === 'C_PP' ||
      tech === 'C-PP' ||
      tech === 'C PLUS PLUS' ||
      tech === 'C_PLUS_PLUS' ||
      tech === 'C-PLUS-PLUS' ||
      tech === 'CPLUSPLUS'
    ) {
      setUri(techsURI.CPP)
    }

    if (tech === 'BABEL') setUri(techsURI.Babel)
  }

  return (
    <CurrentUriContext.Provider
      value={{
        tech,
        uri,
        techIcon,
        handleChangeCurrentTech,
        handleChangeCurrentUri,
        handleChangeCurrentTechIcon
      }}
    >
      {children}
    </CurrentUriContext.Provider>
  )
}

const useCurrentUri = (): ICurrentUriContextData => {
  const context = useContext(CurrentUriContext)

  if (!context) {
    throw new Error('useCurrentUri must be used within an CurrentUriProvider')
  }

  return context
}

export { CurrentUriProvider, useCurrentUri }
