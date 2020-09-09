import styled from 'styled-components'
import Button from '@material-ui/core/Button'




export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(0,0,0);
    background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);

    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    
`

export const ButtonStyled = styled(Button)`
    height: 50px;
    width:200px;
    
    
    
    &&{
        font-weight: bold;
        color:whitesmoke;
        background-color: #1db954;
        
        }
`


export const ImageLogo = styled.img`
width: 50%;
margin-bottom:2rem;
`