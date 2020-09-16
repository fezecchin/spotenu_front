import styled from 'styled-components';

export const ContainerFooter = styled.div`
background-color:#333;
display:flex;
justify-content:space-around;
align-items:center;
width:100%;
height: 10vh;
position: sticky;
bottom: 0;
`

export const ImageLogo = styled.img`
width: 40%;
margin:1rem;

`

export const ForAdmin = styled.h3`
  color: whitesmoke;
  margin-left: 5rem;
  padding-top: 0rem;

`

export const Header = styled.div`
    display: flex; 
    align-items: center;
    position: sticky;
    top: 0;  
    height: 12vh;
    min-width:100%;
    background: rgb(0,0,0);
    background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);
`

export const ContentContainer = styled.div`
    min-height:100vh;
    width:100%;
    background: rgb(0,0,0);
    background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);
`