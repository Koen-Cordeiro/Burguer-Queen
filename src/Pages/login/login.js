import React, { useState } from 'react'
import firebase from 'firebase'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'
import BaseForm from '../../Components/base-form/baseform'
import ErrorSpan from '../../Components/error/error'
import Logo from '../../Components/logo/logo'
import { errorsLogin } from './errorsLogin'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login =  async (staff) => {
    try {
      await firebase
      .auth()
      .signInWithEmailAndPassword(staff.email, staff.password)
    } 
    catch (error) {
      let errorCode = error.code;
        if (!errorsLogin[errorCode]) {
          setError('Ocorreu um erro');
        } else {
          setError(errorsLogin[errorCode]);
        }
    }
  }

  const arrText = [
    { label: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value) },
    { label: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value) },
  ];

  return (
    <>
      <Logo use='login'/>
      <section className='box__log'>
        <form className='form__align'>
          {arrText.map((e, index) => (
            <Input key={index} use='sign' specific='data' label={e.label} type={e.type} value={e.value} handleChange={e.handleChange} />
          ))}
          {error && <ErrorSpan errorText={error}/>}
          <Button type='submit' text='Entrar' handleClick={(e) => {
            e.preventDefault()
            login({ email, password })
          }}/>
        </form>
        <BaseForm text='Não possui uma conta?' anchorText='Registre-se' link='/register'/>
      </section>
    </>
  );

};

export default Login
