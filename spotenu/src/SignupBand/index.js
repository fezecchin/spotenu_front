import React from 'react'
import {useForm} from '../Hooks/useForm'
import axios from 'axios'
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useStyles} from '../Components/useStyles'
import { ContainerSignUp, Form, ButtonStyled, SignupTitle, GoLoginText, ImageLogo} from './style'
import {useHistory} from "react-router-dom";
import logo from "../Img/logo_spotenu.png"

export const SignupBand = () => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const { form, onChange } = useForm({
    name: "", 
    nickname:"",
    email: "",
    password: "",
    
    });
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const submit = (event) => {
   event.preventDefault();
    
 
    const body = {
      name: form.name, 
      nickname: form.nickname,
      email: form.email,
      password: form.password
    }
    
    axios
    .post("http://localhost:3003/user", body)
    .then(response=>{
      localStorage.setItem("token", response.data.token);
      history.push('/')
    })
    .catch(error=>{
      alert(error.message);
    })
  };
  return (
    <ContainerSignUp>
         <ImageLogo src={logo} alt="Spotenu"/>
      <Form onSubmit={submit}>
        <SignupTitle>Cadastre Sua Banda</SignupTitle>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
           <InputLabel htmlFor="outlined-adornment-password">
              Nome
              </InputLabel>

          <OutlinedInput
            name='name'
            type="text"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Nome e Sobrenome"
            label="Nome"
            InputProps={{
              pattern: "[A-Za-z ]{3,}",
              title: "Nome e Sobrenome deve conter no mínimo 3 letras."
          }}
            required
          />
          </FormControl>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
           <InputLabel htmlFor="outlined-adornment-password">
              Nickname
              </InputLabel>

          <OutlinedInput
            name='nickname'
            type="text"
            value={form.nickname}
            onChange={handleInputChange}
            placeholder="Nickname"
            label="Nickname"
            required
          />
         </FormControl>

            <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
           <InputLabel htmlFor="outlined-adornment-password">
              E-mail
              </InputLabel>
          <OutlinedInput
            name='email'
            type="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="email@email.com"
            label="E-mail"
            variant="outlined"
            required
          />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Senha
              </InputLabel>
            <OutlinedInput
              name="password"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={form.password}
              placeholder="Mínimo 6 caracteres"
              onChange={handleInputChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
           <InputLabel htmlFor="outlined-adornment-password">
              Descrição
              </InputLabel>

          <OutlinedInput
            name='description'
            type="text"
            value={form.description}
            onChange={handleInputChange}
            placeholder="Descrição"
            label="Descrição"
            required
          />
         </FormControl>

          
          <ButtonStyled >Cadastrar</ButtonStyled>
          </Form>
          <GoLoginText>Já tem uma conta? <b  onClick={()=>{history.push('/login')}}>Faça seu login</b></GoLoginText>
          
          </ContainerSignUp>
  )
}
