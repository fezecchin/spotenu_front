import styled from 'styled-components';
import Button from '@material-ui/core/Button'


export const ContainerSignUp = styled.div`
  max-height: 80vh;
  display:flex;
  flex-direction: column;
  align-items:center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 1rem;
  margin-right: 1rem; 
  
 `

export const SignupTitle = styled.h2`
color: #333;
text-align: center;
margin-bottom: 1rem;
margin-top: 1rem;
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
 `


