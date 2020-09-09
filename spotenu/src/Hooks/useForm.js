import { useState } from "react";

export const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return { form, onChange };
};

// import {useState} from 'react'

// export const useForm = (initialValues) => {
//     const [form, setForm] = useState(initialValues);
  
//     const changeValue = (name, value) => {
//       setForm({ ...form, [name]: value });
//     };

//     const clearForm = () =>{
//       setForm(initialValues);
//     }
  
//     return {form, changeValue, clearForm};
// };