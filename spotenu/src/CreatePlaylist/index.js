import React from 'react'
import{ HeaderUser} from '../Components/Header'
import { Footer } from '../Components/Footer';
import {useForm} from '../Hooks/useForm'
import {Container,ContentContainer, Form, Input, TituloBuscar} from './style'

export const CreatePlaylist = () => {
  const { form, onChange } = useForm({
        
  });
const handleInputChange = event => {
  const { name, value } = event.target;
  onChange(name, value);
};

const submit = (event) => {
 event.preventDefault();
}
  return (
    <Container>
      <HeaderUser/>
       <ContentContainer>
      <TituloBuscar>Criar Playlists</TituloBuscar>
      <Form onSubmit={submit}>
        <Input
         name="name"
         type="text"
         value={form.search}
         onChange={handleInputChange}
         placeholder="Dê um nome à sua playlist"
         required
        />
        
      </Form>
      </ContentContainer>
       <Footer/>  
    </Container>
  )
}
