import React, {useState, useEffect} from 'react'
import axios from "axios"
import { HeaderAdmin } from '../Components/HeaderAdmin'
import {ContentContainer} from '../Components/styles'
import {FooterAdmin} from '../Components/FooterAdmin'
import {DescriptionBand,ButtonStyled,ContainerAdmin} from './style'
import {useHistory} from "react-router-dom";


export const ApproveBand = () => {
  const [profileInfo, setProfileInfo] = useState([])
  const history = useHistory();
  const token = localStorage.getItem("token");

  if(token === null)
    history.push("/LoginAdmin")

  const getBand = () => {
    
    axios
        .get('http://localhost:3003/user/allBands',
            {
                headers: {
                    Authorization: token
                }
            })

        .then((response) => {
            console.log(response.data.result)
            setProfileInfo(response.data.result)
           
        })
        .catch((error) => {
            alert(error.message)
            
        })}

        useEffect(() => {
            getBand()
        }, [])

  return (
    <div>
    <HeaderAdmin/>
     <ContentContainer>
      {profileInfo.map((listBand) => {
          return (
            <ContainerAdmin>
                <DescriptionBand>{listBand.name}</DescriptionBand>
                <DescriptionBand>{listBand.email}</DescriptionBand>
                
                <ButtonStyled 
                    variant="contained"
                    onClick={''}>Aprovar</ButtonStyled>
                </ContainerAdmin>
          )
      })}
     
    
     </ContentContainer>
   
     <FooterAdmin/>
     </div>
  )
  }
