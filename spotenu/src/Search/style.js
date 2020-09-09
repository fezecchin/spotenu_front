import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

export const TituloBuscar = styled.h2`
  color: whitesmoke;
`

export const Form = styled.form`
 
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