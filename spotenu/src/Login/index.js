import React from 'react'
import {useForm} from '../Hooks/useForm'
import axios from 'axios'
import {Form,ContainerLogin, ButtonStyled,LoginTitle,NoSignupText} from './style'
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useStyles} from '../Components/useStyles'
import {useHistory} from "react-router-dom";
import {HeaderUser} from "../Components/Header"



export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = localStorage.getItem("token");
                         
 

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
    
  const { form, onChange } = useForm({ nickname: "", password: "" });
    
  const handleInputChange = event => {
   const { name, value } = event.target;
   onChange(name, value);
  };

  const onClickEnter = event => {
   event.preventDefault();

      const body = {
          nickname: form.nickname,
          password: form.password
      }
      console.log("debug", body)
      axios
      .post("http://localhost:3003/user/login", body)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        history.push('/HomeUser')
      })
      .catch(error=>{
        console.log(error)
        alert(error.message);
      })
  }
   const goToSignUpPage = () =>{
       history.push("/signupListener")
    }

    const goToLoginAdminPage = () =>{
      history.push("/LoginAdmin")
   }

  return (
    <div>
      <HeaderUser/>
       <ContainerLogin>
        <Form onSubmit={handleInputChange}>
          <LoginTitle>Login</LoginTitle>
         <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
         >
           <InputLabel>
              Nickname
              </InputLabel>

        <OutlinedInput 
         label="nickname"
         placeholder="Nickname"
         variant="standard"
         name="nickname"
         value={form.nickname}
         onChange={handleInputChange} 
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

          <ButtonStyled 
           variant="contained"
           onClick={onClickEnter}>Entrar</ButtonStyled>
      </Form>
          <NoSignupText>Não possui cadastro? <b onClick={goToSignUpPage}>Clique Aqui</b></NoSignupText>
          <NoSignupText>Sou Admin <b onClick={goToLoginAdminPage}>Clique Aqui</b></NoSignupText>

     </ContainerLogin>
   </div>
  )
}