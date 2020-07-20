import React, { useState } from 'react'
import firebase from 'firebase'
import { Link, Redirect } from 'react-router-dom'
import Input from '../../Components/input'
import './styleRegister.css'


const Register = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = (document) => {
    const userCollection = firebase.firestore().collection('users-info');
    firebase
      .auth()
      .createUserWithEmailAndPassword(document.email, document.password)
      .then((cred) => {
        cred.user.updateProfile({ displayName: document.name });
      })
      .then(() => {
        const uid = firebase.auth().currentUser.uid;
        userCollection.doc(uid).set(document);
      })
      .catch((error) => {
        // const errorResult = errorRegister.filter(item => item.code === error.code);
        // errorFunc(errorResult[0].message);
      });
  }

  const arrText = [
    { text: "Digite seu nome", type: "text", value: name, handleChange: (e) => setName(e.currentTarget.value) },
    { text: "Digite seu e-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value) },
    { text: "Digite sua senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value) },
    { text: "Confirme sua senha", type: "password", value: confirmPassword, handleChange: (e) => setConfirmPassword(e.currentTarget.value) },
  ]
  return (
    <main className='flex-center'>
      <section className='flex-column'>
        <h2 className='text-center'>Criar uma nova conta</h2>
        <div className='h-rule' />
        <form className='flex-column center'>
          {arrText.map((e, index) => <Input key={index} value={e.value} handleChange={e.handleChange} inputClass={'input-style'} type={e.type} text={e.text} />)}
          <div onChange={event => setWorkPlace(event.target.value)}>
            <Input type='radio' value={'cozinha'} name={'radio'} text={'Cozinha'} />
            <p>ou</p>
            <Input type='radio' value={'salão'} name={'radio'} text={'Salão'} />
          </div>
          <Link to='/'>Voltar</Link>
          <button className='button' type='submit' onClick={(e) => {
            e.preventDefault()
            password === confirmPassword ? register({ name, email, password, workPlace }) : setError('Senhas não conferem')
          }}>Registre-se</button>
          <span>{error}</span>
        </form>
      </section>
      <section> Lateral</section>
    </main>
  )
}


export default Register
