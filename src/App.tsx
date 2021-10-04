import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

export const App: React.FC = () => {
    return (
        <>
            <h1>
                An Electron Boilerplate with
                React, Typescript, Jest and ESLint.
            </h1>
            <GlobalStyle />
        </>
    );
};