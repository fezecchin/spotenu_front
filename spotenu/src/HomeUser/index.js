import React from 'react'
import {ContainerHeader,ImageLogo,Container,ContentContainer } from './style'
import logo from "../Img/logo_spotenu2.png"
import {Footer} from '../Components/Footer'
import {Search} from '../Search'
import { CreatePlaylist } from '../CreatePlaylist'
export const HomeUser = () => {
  return (
    <Container>
    
      <ContainerHeader>
      <ImageLogo src={logo} alt="Spotenu"/>        
      </ContainerHeader>
      <ContentContainer>
        <Search/>
        <CreatePlaylist/>
      </ContentContainer>

      <Footer/>
    </Container>
  )
}
