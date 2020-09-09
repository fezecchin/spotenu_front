import React from 'react'
import {Container, ButtonStyled,ImageLogo} from './style'
import logo from "../Img/logo_spotenu2.png"
import {useHistory} from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const goToSignUpPage = () =>{
    history.push("/signupListener")
 }

 const goToLoginPage = () =>{
  history.push("/login")
}
  return (
    <Container>
        
        <ImageLogo src={logo} alt="Spotenu"/>
         <ButtonStyled variant="contained" onClick={goToSignUpPage}>Criar Conta</ButtonStyled>
         <ButtonStyled variant="contained" onClick={goToLoginPage}>Login</ButtonStyled>
         
       
    </Container>
  )
}
