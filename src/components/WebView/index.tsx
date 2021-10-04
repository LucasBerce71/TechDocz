import React from 'react';

type WebViewProps = {
    openURI: string;
}

export const WebView: React.FC<WebViewProps> = ({ openURI }) => {
    return (
        <iframe 
            src={openURI}
            width="100%"            
        >
        </iframe>
    );
}