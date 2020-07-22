import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";
import Button from '../../Components/button'
import logo from '../../img/logo.png'
import Input from '../../Components/input'
import './loginStyle.css'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (staff) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(staff.email, staff.password)
      .then((user) => {
        console.log("to logado")
      })
      .catch((error) => {
        // callback(error);
      });
  }

  const arrText = [
    { text: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value) },
    { text: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value) },
  ];

  return (
    <>
      <figure>
        <img alt='logo chase burguer' src={logo} />
      </figure>
      <section className='flex-center border-form'>
        <form className='flex-column center'>
          {arrText.map((e, index) => (
            <Input key={index} componentClass='flex-column' text={e.text} type={e.type} value={e.value} handleChange={e.handleChange} />
          ))}
          <Button buttonClass='button' type='submit' text='Registre-se' handleClick={(e) => {
            e.preventDefault()
            login({ email, password })
          }}/>
        </form>
          <p className='change-register-login text-center'>Não possui uma conta?<br /><Link to='/register'>Registre-se</Link></p>
      </section>
      </>
  );

};

export default Login
