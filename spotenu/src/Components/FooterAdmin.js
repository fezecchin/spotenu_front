import React from 'react'
import {ContainerFooter} from './styles'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import IconButton from '@material-ui/core/IconButton';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import {useHistory} from 'react-router-dom'



export const FooterAdmin = () => {
   const history = useHistory();

  const goAddAdmin = () => {
    console.log('clicou')
    history.push("/AddAdmin");
}

const goApproveBand = () => {
  console.log('clicou')
  history.push("/ApproveBand");
}

const goBlockUser = () => {
   console.log('clicou')
   history.push("/BlockUser");
 }

 const goAddGender = () => {
   console.log('clicou')
   history.push("/AddGender");
 }
  
  return (
    <ContainerFooter>
    <IconButton onClick={ goAddAdmin}> 
      <GroupAddOutlinedIcon
         style={{ fontSize: 30 , color: "whitesmoke"}} />
      </IconButton>
    
      <IconButton onClick={goApproveBand}> 
      < AlbumOutlinedIcon
         style={{ fontSize: 30 , color: "whitesmoke"}} />
      </IconButton>
    
      <IconButton onClick={goBlockUser}> 
      < BlockOutlinedIcon
         style={{ fontSize: 30 , color: "whitesmoke"}} />
      </IconButton>
    
      <IconButton onClick={goAddGender}> 
      < MusicNoteOutlinedIcon
         style={{ fontSize: 30 , color: "whitesmoke"}} />
      </IconButton>
    </ContainerFooter>
  )
}
