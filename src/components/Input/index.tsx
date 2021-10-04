import React, { useCallback, useState } from 'react';
import { ButtonSubmit, InputContainer, InputContent, InputLabel } from './styles';

type InputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: any;
}

type tecsAvailable = 'react navigation';

export const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <InputContainer>
            <InputLabel>
                {label}
            </InputLabel>

            <InputContent 
                placeholder={placeholder} 
                onChange={onChange}
            />

            <ButtonSubmit showDisplay={!!value}>
                Pesquisar
            </ButtonSubmit>
        </InputContainer>
    );
}