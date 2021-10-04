import React, { useState } from 'react';

import { RiGithubFill } from 'react-icons/ri';

import { Input } from '../Input';

import { HeaderContainer, HeaderIconContainer, HeaderIconLabel, HeaderTitle } from './styles';

type HeaderProps = {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {    
    const [tec, setTec] = useState('');

    return (
        <HeaderContainer>
            <HeaderTitle>
                {tec.length <= 20 && tec.length > 0 
                    ? tec
                    : title
                }
            </HeaderTitle>

            <Input 
                label="Filtre por tecnologias" 
                placeholder="Ex. Typescript" 
                value={tec}
                onChange={(e: any) => setTec(e.target.value)}
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