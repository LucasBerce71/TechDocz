import React from 'react';
import { THtmlElements } from '../../types/THtmlElements';
import { TCssDiplayProperties } from '../../types/TCssProperties';
import { prepareFontSizeNumber } from '../../utils/prepareFontSizeNumber';

type TextProps = {
    As?: THtmlElements
    size?: string | number;
    isBold?: boolean;
    display?: TCssDiplayProperties;
}

export const Text: React.FC<TextProps> = ({ 
    As, 
    size, 
    isBold, 
    display,
    children, 
}) => {
    return As ? (
        <As style={{
            fontSize: prepareFontSizeNumber(size),
            fontWeight: isBold ? 'bold' : 'normal',
            display: display || 'flex'
        }}>
            {children}
        </As>
    ) : (
        <h1>
            {children}
        </h1>
    );
}