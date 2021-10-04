import React, { useCallback } from 'react';

import { RiGithubFill } from 'react-icons/ri';

import { Input } from '../Input';

import { HeaderContainer, HeaderIconContainer, HeaderIconLabel, HeaderTitle } from './styles';

type HeaderProps = {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {    
    return (
        <HeaderContainer>
            <HeaderTitle>
                {title || 'TechDocz'}
            </HeaderTitle>

            <Input 
                label="Filtre por tecnologias" 
                placeholder="Ex. Typescript" 
            />

            <HeaderIconContainer>
                <RiGithubFill size={45} />
                <HeaderIconLabel>
                    Visitar repositório do projeto
                </HeaderIconLabel>
            </HeaderIconContainer>
        </HeaderContainer>
    );
};