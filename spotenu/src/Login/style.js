import styled from 'styled-components';
import Button from '@material-ui/core/Button'

export const ContainerLogin = styled.div`
  height: 80vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  /* background: rgb(0,0,0);
  background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%); */
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 1rem;
  margin-right: 1rem; 
  margin-top:1rem;
 `

export const LoginTitle = styled.h2`
 color: #333;
 text-align: center;
 margin-top: 1rem;
 margin-bottom:1rem;
 `

export const ButtonStyled = styled(Button)`
   height: 50px;
   width:200px;
   align-self: center;
   margin-top: 1rem; 
   
    &&{
        font-weight: bold;
        color:whitesmoke;
        background-color: #1db954;
      }
`

export const NoSignupText = styled.p`
 margin-top:1rem;
 color: #333;
 cursor: pointer;
`