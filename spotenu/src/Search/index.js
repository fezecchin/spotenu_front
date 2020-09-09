import React from 'react'
import {useForm} from '../Hooks/useForm'
import {Container, Form, Input, TituloBuscar} from './style'


export const Search = () => {
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
      <TituloBuscar>Buscar</TituloBuscar>
      <Form onSubmit={submit}>
        <Input
       
         name="name"
         type="text"
         value={form.search}
         onChange={handleInputChange}
         placeholder="Músicas e Gêneros"
         required
        
        />
      </Form>
      
               
      
    </Container>
  )
}
