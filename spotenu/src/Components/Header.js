import React from 'react'
import {Header, ImageLogo} from './styles'
import logo from '../Img/logo_spotenu2.png'

export const HeaderUser = () => {
  return (
    <Header>
      <ImageLogo src={logo} alt="Spotenu"/>        
      </Header>
  )
}
