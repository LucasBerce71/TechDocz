import React from 'react'
import { useCurrentUri } from '../../hooks/useCurrentUri'
import { ButtonSubmit, InputContainer, InputContent } from './styles'

type InputProps = {
  placeholder: string
  value: string
  onChange: any
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange
}) => {
  const { handleChangeCurrentUri } = useCurrentUri()

  return (
    <InputContainer>
      <InputContent
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <ButtonSubmit
        showDisplay={!!value}
        onClick={() => {
          handleChangeCurrentUri()
        }}
      >
        Pesquisar
      </ButtonSubmit>
    </InputContainer>
  )
}
