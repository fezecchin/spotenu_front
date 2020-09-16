import React from 'react'
import { HeaderAdmin } from '../Components/HeaderAdmin'
import {ContentContainer} from '../Components/styles'
import {FooterAdmin} from '../Components/FooterAdmin'
import {DescriptionBand,ButtonStyled,ContainerAdmin} from '../ApproveBand/style'

export const BlockUser = () => {
  return (
    <div>
     <HeaderAdmin/>
      <ContentContainer>
        <ContainerAdmin>
         <DescriptionBand>Banda</DescriptionBand>
          <ButtonStyled 
              variant="contained"
              onClick={''}>Bloquear</ButtonStyled>
      </ContainerAdmin>
    
      </ContentContainer>
   
     <FooterAdmin/>
    </div>
  )
}
