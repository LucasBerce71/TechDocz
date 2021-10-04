import React, { useCallback, useState } from 'react';
import { ButtonSubmit, InputContainer, InputContent, InputLabel } from './styles';

type InputProps = {
    label: string;
    placeholder: string;
}

type tecsAvailable = 'react navigation';

export const Input: React.FC<InputProps> = ({ label, placeholder }) => {
    const [search, setSearch] = useState<string>('');

    const handleSearchTec = useCallback((tec: string) => {
        if (tec.toLowerCase() === 'react navigation') {
            const uri = 'https://reactnavigation.org/docs/getting-started/'
            localStorage.setItem('@TecDocz:search', uri);
        } else {
            alert('Ops, ainda não temos essa documentação disponível!');
        }
    }, []);

    return (
        <InputContainer>
            <InputLabel>
                {label}
            </InputLabel>

            <InputContent 
                placeholder={placeholder} 
                onChange={(e) => setSearch(e.target.value)}
            />

            <ButtonSubmit onClick={() => handleSearchTec(search)}>
                Pesquisar
            </ButtonSubmit>
        </InputContainer>
    );
}