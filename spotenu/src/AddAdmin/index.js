import React from 'react'
import { HeaderAdmin } from '../Components/HeaderAdmin'
import {ContentContainer} from '../Components/styles'
import {FooterAdmin} from '../Components/FooterAdmin'
import {DescriptionBand,ButtonStyled,ContainerAdmin} from '../ApproveBand/style'

export const AddAdmin = () => {
  return (
    <div>
     <HeaderAdmin/>
      <ContentContainer>
      <ContainerAdmin>
       <DescriptionBand>Admin</DescriptionBand>
       <ButtonStyled 
           variant="contained"
           onClick={''}>Adicionar</ButtonStyled>
     </ContainerAdmin> 
       
      </ContentContainer>
   
     <FooterAdmin/>
    </div>
  )
}
