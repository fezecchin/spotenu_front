import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ContainerAdmin = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  padding-top: 2rem;
`
export const DescriptionBand = styled.p`
  margin:0;
  color: whitesmoke;
`
export const ButtonStyled = styled(Button)`
   height: 30px;
   width:100px;
   align-self: center;
   margin-top: 1rem; 
   
    &&{
        font-weight: bold;
        color:whitesmoke;
        background-color: #1db954;
      }
`