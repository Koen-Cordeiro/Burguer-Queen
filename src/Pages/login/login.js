import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";
import Button from '../../Components/button/button'
import logo from '../../img/logo.png'
import { errorsLogin } from './errorsLogin'
import Input from '../../Components/input/input'

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
        if (!errorsLogin[errorCode]) {
          setError('Ocorreu um erro');
        } else {
          setError(errorsLogin[errorCode]);
        }
      });
  }

  const arrText = [
    { text: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value) },
    { text: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value) },
  ];

  return (
    <>
      <div className='log-reg-flex log-logo'>
        <img className='log-img-logo' alt='Logotipo Chase Burguer, nome em branco com bordas pretas e uma lupa vermelha no canto direito' src={logo} />
      </div>
      <section className='log-reg-center log-background'>
        <form className='log-reg-column log-reg-center'>
          {arrText.map((e, index) => (
            <Input key={index} componentClass='log-reg-column log-reg-input log-reg-space-after' text={e.text} type={e.type} value={e.value} handleChange={e.handleChange} />
          ))}
          {error && <span className='alert'>{error}</span>}
          <Button type='submit' text='ENTRAR' handleClick={(e) => {
            e.preventDefault()
            login({ email, password })
          }}/>
        </form>
        <div className='log-base-div'>
        <p className='log-reg-inherit-align log-reg-base-p'>Não possui uma conta?{"\u00a0"}<Link to='/register'>Registre-se</Link></p>
        </div>
      </section>
    </>
  );

};

export default Login
