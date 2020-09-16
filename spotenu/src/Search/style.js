import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

export const ContentContainer = styled.div`
    min-height: 80vh;
    width:100%;
    background: rgb(0,0,0);
    background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);
`

export const TituloBuscar = styled.h2`
  color: whitesmoke;
  text-align:center;
`

export const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items:center;
`
export const Input = styled.input`
   background-color:whitesmoke;
   text-align:center;
   border: none;
   border-radius: 5px;
   outline-color:whitesmoke;
   border-bottom: 1px solid white;
   width: 20em;
   height: 4em;
   ::placeholder{
       color:#333;
   }
`