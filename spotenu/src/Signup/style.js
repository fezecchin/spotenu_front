import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


export const ContainerSignUp = styled.div`
  max-width:100vw;
  max-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 16px;
  margin-right: 16px;
 `

 export const ImageLogo = styled.img`
 width: 30%;
 align-self: center;
 margin-top:1rem;
 margin-bottom:1rem;
 `

export const SignupTitle = styled.h2`
color: #333;
text-align: center;
margin-bottom: 1rem;
 
`

 export const Input = styled(TextField)`
 &&{
   /*margin: 8px;*/
   width:332px;
   
   
 }
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

export const GoLoginText = styled.p`
 color: #333;
 cursor: pointer;
 display:flex;
 justify-content:center;
 padding-bottom: 1rem;
`


