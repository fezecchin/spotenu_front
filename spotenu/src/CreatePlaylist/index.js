import React from 'react'
import {useForm} from '../Hooks/useForm'
import {Container, Form, Input, TituloBuscar} from './style'

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
      
               
      
    </Container>
  )
}
