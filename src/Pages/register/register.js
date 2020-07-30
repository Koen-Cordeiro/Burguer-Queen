import React, { useState } from 'react'
import firebase from 'firebase'
import { errorsRegister } from './errorsRegister'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'
import BaseForm from '../../Components/base-form/baseform'
import RadioInputArea from '../../Components/radio-input/radioInput'
import ErrorSpan from '../../Components/error/error'

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
        let errorCode = error.code;
        setError(errorsRegister[errorCode]);
      });
  }

  const arrText = [
    { label: "Nome", type: "text", value: name, placeholder: "Seu nome de detetive", handleChange: (e) => setName(e.currentTarget.value) },
    { label: "E-mail", type: "email", value: email, placeholder: "detetive@exemplo.com.br", handleChange: (e) => setEmail(e.currentTarget.value) },
    { label: "Senha", type: "password", value: password, placeholder: "Cifra de até 6 caracteres", handleChange: (e) => setPassword(e.currentTarget.value) },
    { label: "Confirme sua senha", type: "password", value: confirmPassword, placeholder: 'Confirme sua cifra', handleChange: (e) => setConfirmPassword(e.currentTarget.value) },
  ]
  return (
    <section className='log-reg-flex reg-background'>
      <form className='log-reg-column log-reg-center'>
        {arrText.map((e, index) => <Input key={index} use='sign' specific='data' value={e.value} handleChange={e.handleChange} type={e.type} label={e.label} placeholder={e.placeholder} />)}
        <RadioInputArea setValue={setWorkPlace} />
        {error && <ErrorSpan errorText={error}/>}
        <Button type='submit' text='ENVIAR' handleClick={(e) => {
          e.preventDefault()
          password === confirmPassword ? register({ name, email, password, workPlace }) : setError('Senhas não conferem')
        }} />
      </form>
      <BaseForm text='Já possui uma conta?' anchorText='Entrar' link='/' />
    </section>
  )
}


export default Register
