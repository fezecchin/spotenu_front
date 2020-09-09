import React from 'react';
import {ContainerFooter} from './styles'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import {useHistory} from 'react-router-dom'


export const Footer = () => {
  const history = useHistory();

  const goToSearch = () => {
    console.log('clicou')
    history.push("/search");
}

const goToPlaylist = () => {
  console.log('clicou')
  history.push("/CreatePlaylist");
}
  return (
    <ContainerFooter>
      
      <IconButton onClick={''}>
        <HomeOutlinedIcon 
           style={{ fontSize: 30 , color: "whitesmoke"}} />
        </IconButton>

        <IconButton  onClick={goToSearch}>
          <SearchIcon
            style={{ fontSize: 30 , color: "whitesmoke"}} />
        </IconButton>

        <IconButton  onClick={goToPlaylist}>
          <LibraryAddOutlinedIcon
            style={{ fontSize: 30 , color: "whitesmoke"}} />
        </IconButton>
    
    
    </ContainerFooter>
  )
}




