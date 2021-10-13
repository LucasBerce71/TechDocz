import React from 'react'
import { PictureContainer, PictureContent } from './styles'

type PictureProps = {
  path: string
}

export const Picture: React.FC<PictureProps> = ({ path }) => {
  return (
    <PictureContainer>
      <PictureContent src={path} />
    </PictureContainer>
  )
}
