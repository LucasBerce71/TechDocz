import React from 'react'

import { RiGithubFill } from 'react-icons/ri'
import { useCurrentUri } from '../../hooks/useCurrentUri'

import { Input } from '../Input'
import { Picture } from '../Picture'

import {
  HeaderContainer,
  HeaderIconContainer,
  HeaderIconLabel,
  HeaderTitle,
  HeaderWrapper
} from './styles'

type HeaderProps = {
  title?: string
}

export const Header: React.FC<HeaderProps> = () => {
  const {
    tech,
    techIcon,
    handleChangeCurrentTech,
    handleChangeCurrentUri,
    handleChangeCurrentTechIcon
  } = useCurrentUri()

  return (
    <HeaderContainer>
      <HeaderWrapper>
        {techIcon && tech.length > 0 && <Picture path={techIcon} />}

        <HeaderTitle>
          {tech.length <= 20 && tech.length > 0 && tech !== 'repository'
            ? tech
            : 'TechDocz'}
        </HeaderTitle>
      </HeaderWrapper>

      <Input
        placeholder="Ex. Typescript"
        value={tech === 'repository' ? '' : tech}
        onChange={(e: any) => {
          handleChangeCurrentTech(e.target.value)
          if (e.target.value === '') handleChangeCurrentTechIcon('')
        }}
      />

      <HeaderIconContainer>
        <RiGithubFill size={45} />
        <HeaderIconLabel
          onClick={() => {
            handleChangeCurrentTech('repository')
            handleChangeCurrentUri()
          }}
        >
          Visitar repositório do projeto
        </HeaderIconLabel>
      </HeaderIconContainer>
    </HeaderContainer>
  )
}
