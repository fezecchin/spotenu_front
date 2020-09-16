import React from 'react'
import logo from "../Img/logo_spotenu2.png"
import {Header,ImageLogo, ForAdmin } from './styles'

export const HeaderAdmin = () => {
  return (
    <div>
      <Header>
        <ImageLogo src={logo} alt="Spotenu"/>
         <ForAdmin>para ADMINS</ForAdmin>         
      </Header>
    </div>
  )
}
