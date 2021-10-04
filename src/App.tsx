import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';

import theme from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { WebView } from './components/WebView';

export const App: React.FC = () => {
    const [initialUri, setInitialUri] = useState<any>('');

    useEffect(() => {
        setInitialUri(localStorage.getItem('@TecDocz:search'));
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Header title="TechDocz" />

            <WebView
                openURI="https://reactnavigation.org/docs/getting-started/"
            />

            <GlobalStyle />
        </ThemeProvider>
    );
};