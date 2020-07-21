import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'
import Input from '../../Components/input'

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
    { text: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value)},
    { text: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value)},
  ];

  return (
      <section className='flex-center'>
        <img alt='logo chase burguer' src={logo}/>
        <form>
          {arrText.map((e, index) => (
            <Input key={index} text={e.text} type={e.type} value={e.value} handleChange={e.handleChange} />
          ))}
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            login({email, password})}}>
            Entrar
          </button>
        </form>
        <p>Não possui uma conta?<br/><Link to='/register'>Registre-se</Link></p>
      </section>
  );

};

export default Login
