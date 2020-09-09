import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
`
export const ContentContainer = styled.div`
    min-height: 80vh;
    width:100%;
    background: rgb(0,0,0);
    background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);
`

export const ContainerHeader = styled.div`
box-shadow: inset 0 0 20px 3px #00000012;
background: rgb(0,0,0);
background: linear-gradient(337deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(64,64,64,1) 100%);

display:grid;
z-index: 1;
grid-template-columns: repeat(3, 1fr);
width:100%;
height: 10vh;
position: sticky;
top: 0;
padding:1vw;
padding-left: 5vw;
padding-right: 2vw;
justify-items: start;
align-items: center;
font-size:  0;
font-size: 1.2em;
font-weight: bold;
`

export const ImageLogo = styled.img`
width: 80%;

`