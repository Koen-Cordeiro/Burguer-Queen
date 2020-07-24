import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";
import Form from '../../Components/form'
import Button from '../../Components/button'
import logo from '../../img/logo.png'
import './loginStyle.css'
import { errorsLogin } from './errorsLogin'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (staff) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(staff.email, staff.password)
      .then((user) => {
        //user
      })
      .catch((error) => {
        let errorCode = error.code;
        console.log(errorsLogin.errorCode)
      });
  }

  const arrText = [
    { text: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value) },
    { text: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value) },
  ];

  return (
    <>
      <figure className='log-flex logo'>
        <img className='img-logo' alt='Logotipo Chase Burguer, nome em branco com bordas pretas e uma lupa vermelha no canto direito' src={logo} />
      </figure>
      <section className='log-center log-background'>
        <Form formClass='log-column log-center' arrInput={arrText}>
        </Form>
        <div className='log-base-div'>
        <p className='log-inherit-align log-base-p'>Não possui uma conta?{"\u00a0"}<Link to='/register'>Registre-se</Link></p>
        </div>
      </section>
    </>
  );

};

export default Login
